import os
import sys

# Add server directory to path
sys.path.append(os.path.join(os.getcwd(), 'server'))

from app import create_app
from models import db, Experience, Hotel, BeachDestination, HomeRental, Product

app = create_app()
with app.app_context():
    print("--- Experiences ---")
    for e in Experience.query.all():
        print(f"Title: {e.title} | Image: {e.image}")
    
    print("\n--- Hotels ---")
    for h in Hotel.query.all():
        print(f"Name: {h.name} | Image: {h.image}")

    print("\n--- Beaches ---")
    for b in BeachDestination.query.all():
        print(f"Title: {b.title} | Image: {b.image}")
