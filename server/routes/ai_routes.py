from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
import os
import json
from datetime import datetime
from mistralai.client import Mistral

ai_bp = Blueprint('ai', __name__)

# Configure Mistral
mistral_api_key = os.getenv("MISTRAL_API_KEY")
mistral_client = Mistral(api_key=mistral_api_key) if mistral_api_key else None

@ai_bp.route('/generate-itinerary', methods=['POST'])
def generate_itinerary():
    if not mistral_client:
        return jsonify({"error": "Mistral API key is not configured"}), 500
        
    data = request.json
    destination = data.get('destination')
    days = data.get('days', 3)
    budget = data.get('budget', 'flexible')
    interests = data.get('interests', [])
    
    if not destination:
        return jsonify({"error": "Destination is required"}), 400
    
    prompt = (
        f"Generate a {days}-day travel itinerary for {destination} with a budget of {budget}. "
        f"Interests: {', '.join(interests) if interests else 'general sightseeing'}. "
        "Format the response as a valid JSON object with a key 'days' containing a list. "
        "Each day has 'day_number' (integer) and 'activities' (list). "
        "Each activity has 'time' (HH:MM format), 'location' (string), 'description' (string), 'lat' (float), 'lng' (float), "
        "and 'type' (string, e.g., 'stay' for hotels/accommodation, 'visit' for attractions, 'eat' for restaurants). "
        "Respond ONLY with the raw JSON object, no markdown, no code blocks."
    )
    
    try:
        messages = [{"role": "user", "content": prompt}]
        chat_response = mistral_client.chat.complete(
            model="open-mistral-7b",
            messages=messages,
        )
        raw_content = chat_response.choices[0].message.content.strip()

        # Handle potential markdown code blocks
        if raw_content.startswith("```"):
            lines = raw_content.splitlines()
            if lines[0].strip().startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].strip().startswith("```"):
                lines = lines[:-1]
            raw_content = "\n".join(lines).strip()

        parsed = json.loads(raw_content)
        return jsonify(parsed), 200

    except Exception as e:
        print(f"Itinerary generation error: {e}")
        return jsonify({"error": str(e)}), 500

@ai_bp.route('/apply-itinerary', methods=['POST'])
@jwt_required()
def apply_itinerary():
    from models import db, Itinerary, Activity
    data = request.get_json()
    trip_id = data.get('trip_id')
    days_data = data.get('days', [])
    
    try:
        existing_itineraries = Itinerary.query.filter_by(trip_id=trip_id).all()
        for it in existing_itineraries:
            db.session.delete(it)
        db.session.flush()
        
        for d in days_data:
            itinerary = Itinerary(trip_id=trip_id, day_number=d['day_number'])
            db.session.add(itinerary)
            db.session.flush()
            
            for act in d.get('activities', []):
                new_activity = Activity(
                    itinerary_id=itinerary.id,
                    time=datetime.strptime(act['time'], '%H:%M').time() if act.get('time') else None,
                    location=act['location'],
                    description=act.get('description'),
                    lat=act.get('lat'),
                    lng=act.get('lng'),
                    type=act.get('type', 'visit')
                )
                db.session.add(new_activity)
        
        db.session.commit()
        return jsonify({"msg": "Itinerary applied successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@ai_bp.route('/ask-local', methods=['POST'])
def ask_local():
    if not mistral_client:
        return jsonify({"error": "Mistral API key is not configured"}), 500
        
    data = request.json
    city = data.get('city', 'Unknown Location')
    question = data.get('question', '')
    
    if not question:
        return jsonify({"error": "No question provided"}), 400
        
    prompt = f"As a knowledgeable local of {city}, answer the following question in one short paragraph (max 3 lines) in English: '{question}'."
    
    try:
        messages = [{"role": "user", "content": prompt}]
        chat_response = mistral_client.chat.complete(
            model="open-mistral-7b",
            messages=messages,
        )
        content = chat_response.choices[0].message.content.strip()
        return jsonify({"response": content})
    except Exception as e:
        print(f"Ask Local error: {e}")
        return jsonify({"error": str(e)}), 500
