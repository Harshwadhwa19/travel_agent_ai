
from app import create_app, db
import sqlalchemy as sa

app = create_app()
with app.app_context():
    try:
        engine = db.engine
        inspector = sa.inspect(engine)
        columns = inspector.get_columns('trip')
        print(f"Total columns in 'trip' table: {len(columns)}")
        for column in columns:
            print(f"- {column['name']}: {column['type']}")
    except Exception as e:
        print(f"Error: {e}")
