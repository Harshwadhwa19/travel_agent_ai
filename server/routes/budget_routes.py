from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, BudgetTrack, Trip

budget_bp = Blueprint('budget', __name__)

@budget_bp.route('/<int:trip_id>', methods=['POST'])
@jwt_required()
def add_expense(trip_id):
    data = request.get_json()
    new_expense = BudgetTrack(
        trip_id=trip_id,
        item=data['item'],
        amount=data['amount'],
        category=data.get('category')
    )
    db.session.add(new_expense)
    db.session.commit()
    return jsonify({"msg": "Expense added"}), 201

@budget_bp.route('/<int:trip_id>', methods=['GET'])
@jwt_required()
def get_budget(trip_id):
    trip = Trip.query.get(trip_id)
    expenses = BudgetTrack.query.filter_by(trip_id=trip_id).all()
    total_spent = sum([e.amount for e in expenses])
    
    return jsonify({
        "total_budget": trip.budget,
        "total_spent": total_spent,
        "remaining": trip.budget - total_spent,
        "expenses": [{
            "id": e.id,
            "item": e.item,
            "amount": e.amount,
            "category": e.category,
            "date": e.date.isoformat()
        } for e in expenses]
    })
