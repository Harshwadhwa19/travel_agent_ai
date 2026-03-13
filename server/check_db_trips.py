
from app import create_app, db
from models import Trip, User

def check_trips():
    app = create_app()
    with app.app_context():
        trips = Trip.query.all()
        print(f"Total trips in DB: {len(trips)}")
        for t in trips:
            print(f"ID: {t.id}, Name: {t.name}, CreatorID: {t.creator_id}, Destination: {t.destination}")
        
        users = User.query.all()
        print(f"\nTotal users in DB: {len(users)}")
        for u in users:
            print(f"ID: {u.id}, Username: {u.username}")

if __name__ == "__main__":
    check_trips()
