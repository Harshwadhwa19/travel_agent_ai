
from app import create_app, db
from models import Trip, User

def check_trips_detailed():
    app = create_app()
    with app.app_context():
        print("Checking Users:")
        users = User.query.all()
        for u in users:
            print(f"User ID: {u.id}, Username: {u.username}, Email: {u.email}")
            
        print("\nChecking Trips:")
        trips = Trip.query.all()
        for t in trips:
            print(f"ID: {t.id}, Name: {t.name}, CreatorID: {t.creator_id}, Destination: {t.destination}")
            # Try to fetch the creator object
            creator = User.query.get(t.creator_id)
            if creator:
                print(f"  -> Creator found: {creator.username}")
            else:
                print(f"  -> ERROR: Creator ID {t.creator_id} not found in user table!")

if __name__ == "__main__":
    check_trips_detailed()
