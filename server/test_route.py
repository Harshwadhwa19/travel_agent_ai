
import json
from app import create_app, db
from models import User, Trip
from flask_jwt_extended import create_access_token

def test_create_trip_route():
    app = create_app()
    client = app.test_client()
    
    with app.app_context():
        # Ensure user exists
        user = User.query.filter_by(username="harsh").first()
        if not user:
            user = User(username="harsh", email="harsh@example.com")
            user.set_password("password")
            db.session.add(user)
            db.session.commit()
        
        token = create_access_token(identity=str(user.id))
        
        payload = {
            "name": "Testing Route",
            "destination": "Paris",
            "start_date": "2024-05-01",
            "end_date": "2024-05-10",
            "budget": 1500.5
        }
        
        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        }
        
        print("Sending POST request to /api/trips...")
        response = client.post("/api/trips", data=json.dumps(payload), headers=headers)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response Data: {response.get_json()}")
        
        if response.status_code != 201:
            # Let's see if there are any logs or if we can find more info
            pass

if __name__ == "__main__":
    test_create_trip_route()
