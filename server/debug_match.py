from app import create_app
from models import db, Trip, User

app = create_app()
with app.app_context():
    with open('db_debug_output.txt', 'w', encoding='utf-8') as f:
        f.write("--- Users ---\n")
        users = User.query.all()
        for u in users:
            f.write(f"ID: {u.id} | Username: {u.username} | Email: {u.email}\n")
            
        f.write("\n--- Trips ---\n")
        trips = Trip.query.all()
        for t in trips:
            f.write(f"ID: {t.id} | Creator: {t.creator_id} | Dest: '{t.destination}' | Solo: {t.is_solo} | Dates: {t.start_date} to {t.end_date}\n")
    print("Debug info written to db_debug_output.txt")


