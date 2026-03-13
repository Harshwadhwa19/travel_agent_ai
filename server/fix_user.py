
from app import create_app, db
from models import User

def reset_and_test():
    app = create_app()
    with app.app_context():
        user = User.query.filter_by(username="harsh").first()
        if user:
            print(f"Resetting password for {user.username}...")
            user.set_password("password")
            db.session.commit()
            print("Password reset successful.")
        else:
            print("User 'harsh' not found. Creating user...")
            user = User(username="harsh", email="harsh@gmail.com")
            user.set_password("password")
            db.session.add(user)
            db.session.commit()
            print("User creation successful.")

if __name__ == "__main__":
    reset_and_test()
