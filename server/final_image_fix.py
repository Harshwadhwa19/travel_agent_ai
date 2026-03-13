import sqlite3
import os

# Absolute paths for both potential database locations
db_paths = [
    r'c:\Users\HP\Downloads\Travello-Agentic_Travel_planning_system-main\server\instance\travel.db',
    r'c:\Users\HP\Downloads\Travello-Agentic_Travel_planning_system-main\server\travel.db'
]

updates = [
    ("%Jaipur%", "https://images.unsplash.com/photo-1599661046289-e31897850029?auto=format&fit=crop&w=800&q=80"),
    ("%Mumbai%", "https://images.unsplash.com/photo-1528613094057-a1699d82d43d?auto=format&fit=crop&w=800&q=80"),
    ("%Goa Beach%", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80")
]

for db_path in db_paths:
    if os.path.exists(db_path):
        print(f"Connecting to {db_path}...")
        try:
            conn = sqlite3.connect(db_path)
            cursor = conn.cursor()
            for title_pattern, url in updates:
                cursor.execute("UPDATE experience SET image = ? WHERE title LIKE ?", (url, title_pattern))
                print(f"  - Updated records matching {title_pattern}: {cursor.rowcount} rows affected.")
            conn.commit()
            conn.close()
            print("  - Database updated successfully.")
        except Exception as e:
            print(f"  - Error updating {db_path}: {e}")
    else:
        print(f"File not found: {db_path}")

print("\nDone! Please restart your server and refresh the browser.")
