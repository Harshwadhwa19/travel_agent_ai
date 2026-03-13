import os
from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
from models import db
from routes.auth_routes import auth_bp
from routes.trip_routes import trip_bp
from routes.ai_routes import ai_bp
from routes.location_routes import location_bp
from routes.budget_routes import budget_bp
from routes.collab_routes import collab_bp
from routes.buddy_routes import buddy_bp

load_dotenv()

def create_app():
    app = Flask(__name__)

    # Enable CORS for frontend (Vercel)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    # Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///travel.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'super-secret-key')

    db.init_app(app)
    jwt = JWTManager(app)

    from routes.discovery_routes import discovery_bp

    # Register API routes
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(trip_bp, url_prefix='/api/trips')
    app.register_blueprint(ai_bp, url_prefix='/api/ai')
    app.register_blueprint(location_bp, url_prefix='/api/location')
    app.register_blueprint(budget_bp, url_prefix='/api/budget')
    app.register_blueprint(collab_bp, url_prefix='/api/collab')
    app.register_blueprint(discovery_bp, url_prefix='/api/discovery')
    app.register_blueprint(buddy_bp, url_prefix='/api/buddy')

    # Health route for Render
    @app.route("/")
    def health():
        return jsonify({"status": "Travello backend running"}), 200

    with app.app_context():
        import models
        db.create_all()
        seed_db()

    return app


def seed_db():
    from models import Product, TravelBuddyProfile, SafetyRating, Hotel, Experience, BeachDestination, HomeRental

    products_data = [
        {"name": "Madhubani Painting", "price": "₹2,500", "category": "Handicrafts", "rating": 4.8, "description": "Traditional Bihar art.", "image": "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=800&q=80"},
        {"name": "Pashmina Shawl", "price": "₹5,000", "category": "Handicrafts", "rating": 4.5, "description": "Authentic Kashmiri.", "image": "https://images.unsplash.com/photo-1589150116960-b0ea370bf021?auto=format&fit=crop&w=800&q=80"},
        {"name": "Kerala Banana Chips", "price": "₹300", "category": "Local Food", "rating": 4.4, "description": "Crispy snacks.", "image": "https://images.unsplash.com/photo-1621447509323-570a2027457f?auto=format&fit=crop&w=800&q=80"}
    ]

    for data in products_data:
        p = Product.query.filter_by(name=data["name"]).first()
        if p:
            p.image = data["image"]
        else:
            db.session.add(Product(**data))

    # Seed Experiences
    experiences = [
        {"title": "Goa Beach Adventure", "image": "https://images.unsplash.com/photo-1512343802231-9162133823cd?auto=format&fit=crop&w=800&q=80", "reviews": "4.8/5", "price": "₹1,500"},
        {"title": "Jaipur Cultural Tour", "image": "https://images.unsplash.com/photo-1599661046289-e31897850029?auto=format&fit=crop&w=800&q=80", "reviews": "4.9/5", "price": "₹2,200"},
        {"title": "Mumbai Street Food", "image": "https://images.unsplash.com/photo-1528613094057-a1699d82d43d?auto=format&fit=crop&w=800&q=80", "reviews": "4.7/5", "price": "₹800"}
    ]
    for exp in experiences:
        if not Experience.query.filter_by(title=exp["title"]).first():
            db.session.add(Experience(**exp))

    # Seed Hotels
    hotels = [
        {"name": "Grand Luxury Hotel", "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", "rating": "4.9", "price": "₹15,000", "category": "Luxury"},
        {"name": "Comfort Inn", "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", "rating": "4.4", "price": "₹5,000", "category": "Mid-Range"},
        {"name": "Budget Stay", "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", "rating": "4.1", "price": "₹2,000", "category": "Budget"}
    ]
    for hotel in hotels:
        if not Hotel.query.filter_by(name=hotel["name"]).first():
            db.session.add(Hotel(**hotel))

    # Seed Beaches
    beaches = [
        {"title": "Tulum, Mexico", "image": "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80"},
        {"title": "Bora Bora", "image": "https://images.unsplash.com/photo-1500993851916-60605626ec92?auto=format&fit=crop&w=800&q=80"},
        {"title": "Hawaii", "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"}
    ]
    for beach in beaches:
        if not BeachDestination.query.filter_by(title=beach["title"]).first():
            db.session.add(BeachDestination(**beach))

    # Seed Rentals
    rentals = [
        {"title": "Rentals in Raichak", "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80", "count": "15+ properties"},
        {"title": "Rentals in Puri", "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=800&q=80", "count": "20+ properties"},
        {"title": "Rentals in Santiniketan", "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", "count": "10+ properties"}
    ]
    for rental in rentals:
        if not HomeRental.query.filter_by(title=rental["title"]).first():
            db.session.add(HomeRental(**rental))

    if not TravelBuddyProfile.query.first():
        buddies = [
            TravelBuddyProfile(name="John", destination="Goa", dates="2024-12-15 to 2024-12-20", interests="Sightseeing, Food", budget="₹60,000", preference="male"),
            TravelBuddyProfile(name="Jane", destination="Delhi", dates="2024-12-05 to 2024-12-10", interests="Food, Culture", budget="₹40,000", preference="female")
        ]
        db.session.add_all(buddies)

    if not SafetyRating.query.first():
        safety = [
            SafetyRating(district="Delhi", crimes=2500),
            SafetyRating(district="Goa", crimes=400),
            SafetyRating(district="Mumbai", crimes=1200)
        ]
        db.session.add_all(safety)

    db.session.commit()



if __name__ == '__main__':
    app = create_app()

    # Render requires binding to PORT environment variable
    port = int(os.environ.get("PORT", 5000))

    app.run(host='0.0.0.0', port=port, debug=True)