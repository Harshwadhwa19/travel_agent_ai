import sqlite3
import os

# Check common locations for the database
possible_paths = [
    'server/instance/travel.db',
    'server/travel.db',
    'instance/travel.db',
    'travel.db'
]

db_path = None
for p in possible_paths:
    if os.path.exists(p):
        db_path = p
        break

if not db_path:
    print("Error: Could not find travel.db")
    exit(1)

print(f"Connecting to {db_path}...")
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Update records using fuzzy matching to ensure it works even with spaces/etc
updates = [
    ("%Jaipur%", "https://images.unsplash.com/photo-1599661046289-e31897850029?auto=format&fit=crop&w=800&q=80"),
    ("%Mumbai%", "https://images.unsplash.com/photo-1528613094057-a1699d82d43d?auto=format&fit=crop&w=800&q=80"),
    ("%Goa%", "https://images.unsplash.com/photo-1512343802231-9162133823cd?auto=format&fit=crop&w=800&q=80")
]

for title_pattern, url in updates:
    cursor.execute("UPDATE experience SET image = ? WHERE title LIKE ?", (url, title_pattern))
    print(f"Updated records matching {title_pattern}: {cursor.rowcount} rows affected.")

conn.commit()
print("Database updated successfully.")
conn.close()
