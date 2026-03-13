import os
import sys

# Add server directory to path
sys.path.append(os.path.join(os.getcwd(), 'server'))

from app import create_app
from models import db, Experience, Hotel, BeachDestination, HomeRental, Product

app = create_app()
with app.app_context():
    print(f"Experience: {Experience.query.count()}")
    print(f"Hotel: {Hotel.query.count()}")
    print(f"BeachDestination: {BeachDestination.query.count()}")
    print(f"HomeRental: {HomeRental.query.count()}")
    print(f"Product: {Product.query.count()}")
