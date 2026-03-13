from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Comment, Activity, Itinerary, Trip
from datetime import datetime

collab_bp = Blueprint('collab', __name__)

@collab_bp.route('/trips/<int:trip_id>/comments', methods=['POST'])
@jwt_required()
def add_comment(trip_id):
    data = request.get_json()
    user_id = int(get_jwt_identity())
    new_comment = Comment(trip_id=trip_id, user_id=user_id, content=data['content'])
    db.session.add(new_comment)
    db.session.commit()
    return jsonify({"msg": "Comment added"}), 201

@collab_bp.route('/trips/<int:trip_id>/comments', methods=['GET'])
@jwt_required()
def get_comments(trip_id):
    comments = Comment.query.filter_by(trip_id=trip_id).all()
    return jsonify([{
        "id": c.id,
        "username": c.user.username,
        "content": c.content,
        "timestamp": c.timestamp.isoformat()
    } for c in comments])

@collab_bp.route('/trips/<int:trip_id>/itinerary', methods=['POST'])
@jwt_required()
def add_activity(trip_id):
    data = request.get_json()
    day = data.get('day_number', 1)
    
    itinerary = Itinerary.query.filter_by(trip_id=trip_id, day_number=day).first()
    if not itinerary:
        itinerary = Itinerary(trip_id=trip_id, day_number=day)
        db.session.add(itinerary)
        db.session.flush()
        
    new_activity = Activity(
        itinerary_id=itinerary.id,
        time=datetime.strptime(data['time'], '%H:%M').time(),
        location=data['location'],
        description=data.get('description'),
        lat=data.get('lat'),
        lng=data.get('lng')
    )
    db.session.add(new_activity)
    db.session.commit()
    return jsonify({"msg": "Activity added"}), 201
