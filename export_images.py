import os
import sys
import json

# Add server directory to path
sys.path.append(os.path.join(os.getcwd(), 'server'))

from app import create_app
from models import db, Experience, Hotel, BeachDestination, HomeRental, Product

app = create_app()
with app.app_context():
    data = {
        "experiences": [{"title": e.title, "image": e.image} for e in Experience.query.all()],
        "hotels": [{"name": h.name, "image": h.image} for h in Hotel.query.all()],
        "beaches": [{"title": b.title, "image": b.image} for b in BeachDestination.query.all()],
        "products": [{"name": p.name, "image": p.image} for p in Product.query.all()]
    }
    
    with open('image_data.json', 'w') as f:
        json.dump(data, f, indent=4)

print("Image data saved to image_data.json")
