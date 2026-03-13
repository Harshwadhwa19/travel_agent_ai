
import requests
import json

BASE_URL = "http://localhost:5000/api"

def debug_trip_creation():
    # 1. Login to get token
    login_data = {
        "username": "harsh", # Use the username from previous session
        "password": "password" # Assuming a default password if not known, or I'll try to find it
    }
    
    # Actually, better to just create a trip directly in Python using app context to see the exception
    from app import create_app, db
    from models import Trip, User
    from datetime import datetime

    app = create_app()
    with app.app_context():
        user = User.query.filter_by(username="harsh").first()
        if not user:
            print("User 'harsh' not found. Creating...")
            user = User(username="harsh", email="harsh@example.com")
            user.set_password("password")
            db.session.add(user)
            db.session.commit()
            print(f"Created user with ID: {user.id}")
        else:
            print(f"Using user 'harsh' with ID: {user.id}")

        try:
            print("Attempting to create trip...")
            new_trip = Trip(
                name="Test Trip",
                destination="Test Destination",
                start_date=datetime.strptime("2024-01-01", '%Y-%m-%d').date(),
                end_date=datetime.strptime("2024-01-05", '%Y-%m-%d').date(),
                budget=1000.0,
                creator_id=user.id
            )
            db.session.add(new_trip)
            db.session.commit()
            print("Trip created successfully!")
        except Exception as e:
            db.session.rollback()
            print(f"EXCEPTION: {e}")
            import traceback
            traceback.print_exc()

if __name__ == "__main__":
    debug_trip_creation()
