
import requests
import time

BASE_URL = "http://localhost:5000/api"

def test_auth():
    timestamp = str(int(time.time()))
    username = "final_test_" + timestamp
    email = "final_" + timestamp + "@example.com"
    password = "password123"
    
    print(f"1. Testing Signup for {username}...")
    try:
        r = requests.post(f"{BASE_URL}/auth/signup", json={
            "username": username, "email": email, "password": password
        })
        print(f"Signup Status: {r.status_code}, Response: {r.json()}")
    except Exception as e:
        print(f"Signup Error: {e}")

    print(f"\n2. Testing Login with Username ({username})...")
    try:
        r = requests.post(f"{BASE_URL}/auth/login", json={
            "username": username, "password": password
        })
        print(f"Login (Username) Status: {r.status_code}, Response: {r.json()}")
    except Exception as e:
        print(f"Login Error: {e}")

    print(f"\n3. Testing Login with Email ({email})...")
    try:
        r = requests.post(f"{BASE_URL}/auth/login", json={
            "email": email, "password": password
        })
        print(f"Login (Email) Status: {r.status_code}, Response: {r.json()}")
    except Exception as e:
        print(f"Login Error: {e}")

    print("\n4. Testing Login with 'harsh' / 'password'...")
    try:
        r = requests.post(f"{BASE_URL}/auth/login", json={
            "username": "harsh", "password": "password"
        })
        print(f"Login (harsh) Status: {r.status_code}, Response: {r.json()}")
    except Exception as e:
        print(f"Login Error: {e}")

if __name__ == "__main__":
    test_auth()
