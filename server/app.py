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

    app.run(host='0.0.0.0', port=port)