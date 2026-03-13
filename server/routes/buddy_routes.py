from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Trip, User, BuddyMatch, PrivateMessage
from datetime import datetime

buddy_bp = Blueprint('buddy', __name__)

@buddy_bp.route('/match-solo', methods=['GET'])
@jwt_required()
def match_solo():
    user_id = int(get_jwt_identity())
    # Get user's active solo trips
    user_trips = Trip.query.filter_by(creator_id=user_id, is_solo=True).all()
    if not user_trips:
        return jsonify({"msg": "No active solo trips found for matching", "matches": []}), 200
    
    matches = []
    # Find other solo travelers with overlapping destinations and dates
    for my_trip in user_trips:
        dest = my_trip.destination.strip().lower()
        if not dest: continue
        
        # Find other solo trips to the same destination
        # We also check for date overlap: 
        # (StartA <= EndB) and (EndA >= StartB)
        other_solo_trips = Trip.query.filter(
            Trip.creator_id != user_id,
            Trip.is_solo == True,
            Trip.destination.ilike(f'%{dest}%'),
            Trip.start_date <= my_trip.end_date,
            Trip.end_date >= my_trip.start_date
        ).all()
        
        for ot in other_solo_trips:
            # Check if this user is already in our matches list
            if any(m['user_id'] == ot.creator_id for m in matches):
                continue

            # Check if already matched or requested
            existing = BuddyMatch.query.filter(
                ((BuddyMatch.sender_id == user_id) & (BuddyMatch.receiver_id == ot.creator_id)) |
                ((BuddyMatch.sender_id == ot.creator_id) & (BuddyMatch.receiver_id == user_id))
            ).first()
            
            matches.append({
                "user_id": ot.creator_id,
                "username": ot.creator.username,
                "destination": ot.destination,
                "trip_id": ot.id,
                "trip_name": ot.name,
                "dates": f"{ot.start_date.isoformat()} to {ot.end_date.isoformat()}",
                "status": existing.status if existing else "none",
                "match_id": existing.id if existing else None
            })
            
    return jsonify({"matches": matches}), 200


@buddy_bp.route('/request-connection', methods=['POST'])
@jwt_required()
def request_connection():
    sender_id = int(get_jwt_identity())
    data = request.json
    receiver_id = data.get('receiver_id')
    
    if not receiver_id:
        return jsonify({"error": "Receiver ID required"}), 400
        
    existing = BuddyMatch.query.filter(
        ((BuddyMatch.sender_id == sender_id) & (BuddyMatch.receiver_id == receiver_id)) |
        ((BuddyMatch.sender_id == receiver_id) & (BuddyMatch.receiver_id == sender_id))
    ).first()
    
    if existing:
        return jsonify({"msg": "Already requested or connected", "status": existing.status}), 200
        
    new_match = BuddyMatch(sender_id=sender_id, receiver_id=receiver_id, status='pending')
    db.session.add(new_match)
    db.session.commit()
    
    return jsonify({"msg": "Connection request sent", "match_id": new_match.id}), 201

@buddy_bp.route('/respond-connection', methods=['POST'])
@jwt_required()
def respond_connection():
    user_id = int(get_jwt_identity())
    data = request.json
    match_id = data.get('match_id')
    new_status = data.get('status') # accepted, rejected
    
    match = BuddyMatch.query.get(match_id)
    if not match or match.receiver_id != user_id:
        return jsonify({"error": "Unauthorized or not found"}), 403
        
    match.status = new_status
    db.session.commit()
    
    return jsonify({"msg": f"Connection {new_status}"}), 200

@buddy_bp.route('/chats', methods=['GET'])
@jwt_required()
def get_chats():
    user_id = int(get_jwt_identity())
    matches = BuddyMatch.query.filter(
        ((BuddyMatch.sender_id == user_id) | (BuddyMatch.receiver_id == user_id)),
        (BuddyMatch.status == 'accepted')
    ).all()
    
    chats = []
    for m in matches:
        other_user = m.receiver if m.sender_id == user_id else m.sender
        chats.append({
            "match_id": m.id,
            "other_user_id": other_user.id,
            "other_username": other_user.username
        })
        
    return jsonify(chats), 200

@buddy_bp.route('/chats/<int:match_id>/messages', methods=['GET', 'POST'])
@jwt_required()
def manage_messages(match_id):
    user_id = int(get_jwt_identity())
    match = BuddyMatch.query.get(match_id)
    
    if not match or (match.sender_id != user_id and match.receiver_id != user_id):
        return jsonify({"error": "Unauthorized"}), 403
        
    if request.method == 'GET':
        messages = PrivateMessage.query.filter_by(match_id=match_id).order_by(PrivateMessage.timestamp).all()
        return jsonify([{
            "id": msg.id,
            "sender_id": msg.sender_id,
            "sender_username": msg.sender.username,
            "content": msg.content,
            "timestamp": msg.timestamp.isoformat()
        } for msg in messages]), 200
        
    if request.method == 'POST':
        data = request.json
        content = data.get('content')
        if not content:
            return jsonify({"error": "Content required"}), 400
            
        other_user_id = match.receiver_id if match.sender_id == user_id else match.sender_id
        new_msg = PrivateMessage(
            sender_id=user_id,
            receiver_id=other_user_id,
            match_id=match_id,
            content=content
        )
        db.session.add(new_msg)
        db.session.commit()
        return jsonify({"msg": "Sent"}), 201

@buddy_bp.route('/requests', methods=['GET'])
@jwt_required()
def get_requests():
    user_id = int(get_jwt_identity())
    
    # Incoming requests (receiver is current user)
    incoming = BuddyMatch.query.filter_by(receiver_id=user_id, status='pending').all()
    
    # Outgoing requests (sender is current user)
    outgoing = BuddyMatch.query.filter_by(sender_id=user_id, status='pending').all()
    
    return jsonify({
        "incoming": [{
            "match_id": r.id,
            "sender_id": r.sender_id,
            "sender_username": r.sender.username,
            "timestamp": r.timestamp.isoformat()
        } for r in incoming],
        "outgoing": [{
            "match_id": r.id,
            "receiver_id": r.receiver_id,
            "receiver_username": r.receiver.username,
            "timestamp": r.timestamp.isoformat()
        } for r in outgoing]
    }), 200

@buddy_bp.route('/seed-test', methods=['POST'])
def seed_test():
    # Helper to seed a second user and trip for matching tests
    from models import User, Trip
    from datetime import date
    
    # Check if test user exists
    test_user = User.query.filter_by(username='buddy_tester').first()
    if not test_user:
        test_user = User(username='buddy_tester', email='test@example.com')
        test_user.set_password('password123')
        db.session.add(test_user)
        db.session.flush()
    
    # Create a trip for this user to Manali
    existing_trip = Trip.query.filter_by(creator_id=test_user.id, destination='manali').first()
    if not existing_trip:
        new_trip = Trip(
            name="Testing Manali",
            destination="manali",
            start_date=date(2026, 3, 17),
            end_date=date(2026, 3, 20),
            creator_id=test_user.id,
            is_solo=True
        )
        db.session.add(new_trip)
    
    db.session.commit()
    return jsonify({"msg": "Test data seeded. User 'buddy_tester' is now going to Manali on 2026-03-17."}), 201

@buddy_bp.route('/connections/<int:match_id>', methods=['DELETE'])

@jwt_required()
def remove_connection(match_id):
    user_id = int(get_jwt_identity())
    match = BuddyMatch.query.get(match_id)
    
    if not match or (match.sender_id != user_id and match.receiver_id != user_id):
        return jsonify({"error": "Unauthorized or not found"}), 403
        
    db.session.delete(match)
    
    # Also delete associated messages? Usually yes to clean up.
    PrivateMessage.query.filter_by(match_id=match_id).delete()
    
    db.session.commit()
    return jsonify({"msg": "Connection/Request removed"}), 200

