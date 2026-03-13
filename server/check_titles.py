import sqlite3
import os

db_path = 'instance/travel.db'
if not os.path.exists(db_path):
    db_path = 'travel.db'

if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('SELECT title, image FROM experience')
    rows = cursor.fetchall()
    print("Experience Titles and Images:")
    for row in rows:
        print(f"Title: '{row[0]}', Image: {row[1]}")
    conn.close()
else:
    print(f"DB not found at {db_path}")
