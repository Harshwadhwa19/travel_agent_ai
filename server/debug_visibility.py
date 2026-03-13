
import requests
import time

BASE_URL = "http://localhost:5000/api"

def debug_full_cycle():
    timestamp = str(int(time.time()))
    username = "visibility_user_" + timestamp
    email = "visibility_" + timestamp + "@example.com"
    password = "password123"
    
    # 1. Signup
    print(f"Signing up {username}...")
    r = requests.post(f"{BASE_URL}/auth/signup", json={
        "username": username, "email": email, "password": password
    })
    print(f"Signup: {r.status_code}")
    
    # 2. Login
    print("Logging in...")
    r = requests.post(f"{BASE_URL}/auth/login", json={
        "username": username, "password": password
    })
    token = r.json().get('access_token')
    
    # 3. Create Trip
    print("Creating trip...")
    headers = {"Authorization": f"Bearer {token}"}
    r = requests.post(f"{BASE_URL}/trips", json={
        "name": "Visibility Test Trip",
        "destination": "Paris",
        "start_date": "2024-06-01",
        "end_date": "2024-06-10",
        "budget": 2000
    }, headers=headers)
    print(f"Create Trip: {r.status_code}, {r.json()}")
    
    # 4. Fetch Trips
    print("Fetching trips...")
    r = requests.get(f"{BASE_URL}/trips", headers=headers)
    print(f"Fetch Trips Status: {r.status_code}")
    print(f"Fetch Trips Data: {r.json()}")

if __name__ == "__main__":
    debug_full_cycle()
