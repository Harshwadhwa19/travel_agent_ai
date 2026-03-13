import sqlite3
import os

db_path = 'c:/Users/HP/Downloads/Travello-Agentic_Travel_planning_system-main/server/instance/travel.db'
if not os.path.exists(db_path):
    db_path = 'c:/Users/HP/Downloads/Travello-Agentic_Travel_planning_system-main/server/travel.db'

print(f"Connecting to {db_path}")
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Update Experiences
experiences = [
    ("Goa Beach Adventure", "https://images.unsplash.com/photo-1512343802231-9162133823cd?auto=format&fit=crop&w=800&q=80"),
    ("Jaipur Cultural Tour", "https://images.unsplash.com/photo-1599661046289-e31897850029?auto=format&fit=crop&w=800&q=80"),
    ("Mumbai Street Food", "https://images.unsplash.com/photo-1528613094057-a1699d82d43d?auto=format&fit=crop&w=800&q=80")
]

for title, url in experiences:
    cursor.execute("UPDATE experience SET image = ? WHERE title = ?", (url, title))

# Update Hotels
hotels = [
    ("Grand Luxury Hotel", "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"),
    ("Comfort Inn", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"),
    ("Budget Stay", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80")
]

for name, url in hotels:
    cursor.execute("UPDATE hotel SET image = ? WHERE name = ?", (url, name))

# Update Beaches
beaches = [
    ("Tulum, Mexico", "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80"),
    ("Bora Bora", "https://images.unsplash.com/photo-1500993851916-60605626ec92?auto=format&fit=crop&w=800&q=80"),
    ("Hawaii", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80")
]

for title, url in beaches:
    cursor.execute("UPDATE beach_destination SET image = ? WHERE title = ?", (url, title))

# Update Rentals
rentals = [
    ("Rentals in Raichak", "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80"),
    ("Rentals in Puri", "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=800&q=80"),
    ("Rentals in Santiniketan", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80")
]

for title, url in rentals:
    cursor.execute("UPDATE home_rental SET image = ? WHERE title = ?", (url, title))

conn.commit()
print("Database updated successfully.")
conn.close()
