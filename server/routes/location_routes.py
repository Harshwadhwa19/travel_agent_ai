from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
import requests

location_bp = Blueprint('location', __name__)

@location_bp.route('/nearby-parking', methods=['GET'])
@jwt_required()
def get_nearby_parking():
    lat = request.args.get('lat')
    lng = request.args.get('lng')
    
    # Overpass API query for parking within 1500m
    overpass_url = "http://overpass-api.de/api/interpreter"
    overpass_query = f"""
    [out:json];
    (
      node["amenity"="parking"](around:1500,{lat},{lng});
      way["amenity"="parking"](around:1500,{lat},{lng});
      relation["amenity"="parking"](around:1500,{lat},{lng});
    );
    out center;
    """
    
    try:
        response = requests.get(overpass_url, params={'data': overpass_query})
        data = response.json()
        
        # Format the data to match what the frontend expects or a simple version
        results = []
        for element in data.get('elements', []):
            res = {
                "name": element.get('tags', {}).get('name', 'Parking'),
                "geometry": {
                    "location": {
                        "lat": element.get('lat') or element.get('center', {}).get('lat'),
                        "lng": element.get('lon') or element.get('center', {}).get('lng')
                    }
                }
            }
            results.append(res)
            
        return jsonify({"results": results}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@location_bp.route('/add-to-calendar', methods=['POST'])
@jwt_required()
def add_to_calendar():
    # Placeholder for Calendar integration removed (Google Calendar no longer used)
    return jsonify({"msg": "Calendar integration is disabled in this version"}), 404
