from flask import Blueprint, request, jsonify
from models import db, Product, TravelBuddyProfile, SafetyRating, Hotel, Experience, BeachDestination, HomeRental
from flask_jwt_extended import jwt_required

discovery_bp = Blueprint('discovery', __name__)

@discovery_bp.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        "id": p.id,
        "name": p.name,
        "image": p.image,
        "price": p.price,
        "description": p.description,
        "category": p.category,
        "rating": p.rating
    } for p in products])

@discovery_bp.route('/buddies', methods=['GET'])
def get_buddies():
    buddies = TravelBuddyProfile.query.all()
    return jsonify([{
        "id": b.id,
        "name": b.name,
        "avatar": b.avatar,
        "destination": b.destination,
        "dates": b.dates,
        "interests": b.interests,
        "budget": b.budget,
        "preference": b.preference
    } for b in buddies])

@discovery_bp.route('/safety', methods=['GET'])
def get_safety():
    district = request.args.get('district')
    if not district:
        return jsonify([])
    
    ratings = SafetyRating.query.filter(SafetyRating.district.ilike(f'%{district}%')).all()
    return jsonify([{
        "district": r.district,
        "crimes": r.crimes
    } for r in ratings])

@discovery_bp.route('/hotels', methods=['GET'])
def get_hotels():
    hotels = Hotel.query.all()
    return jsonify([{
        "id": h.id,
        "name": h.name,
        "image": h.image,
        "rating": h.rating,
        "price": h.price,
        "category": h.category
    } for h in hotels])

@discovery_bp.route('/experiences', methods=['GET'])
def get_experiences():
    experiences = Experience.query.all()
    return jsonify([{
        "id": e.id,
        "title": e.title,
        "image": e.image,
        "reviews": e.reviews,
        "price": e.price
    } for e in experiences])

@discovery_bp.route('/beaches', methods=['GET'])
def get_beaches():
    beaches = BeachDestination.query.all()
    return jsonify([{
        "id": b.id,
        "title": b.title,
        "image": b.image
    } for b in beaches])

@discovery_bp.route('/rentals', methods=['GET'])
def get_rentals():
    rentals = HomeRental.query.all()
    return jsonify([{
        "id": r.id,
        "title": r.title,
        "image": r.image,
        "count": r.count
    } for r in rentals])
