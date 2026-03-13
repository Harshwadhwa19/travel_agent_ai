
import requests

BASE_URL = "http://localhost:5000/api"

def debug_fetch():
    # Attempt login first
    login_data = {"username": "harsh", "password": "password"}
    print("Logging in...")
    r = requests.post(f"{BASE_URL}/auth/login", json=login_data)
    if r.status_code != 200:
        print(f"Login failed: {r.text}")
        return
    
    token = r.json().get('access_token')
    print(f"Login success. Token obtained.")
    
    # Fetch trips
    print("Fetching /trips...")
    headers = {"Authorization": f"Bearer {token}"}
    r = requests.get(f"{BASE_URL}/trips", headers=headers)
    print(f"Status Code: {r.status_code}")
    try:
        data = r.json()
        print(f"Response Data: {data}")
    except:
        print(f"Response Text: {r.text}")

if __name__ == "__main__":
    debug_fetch()
