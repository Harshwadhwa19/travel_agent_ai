import requests

urls = [
    "https://images.unsplash.com/photo-1512343802231-9162133823cd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1599661046289-e31897850029?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1528613094057-a1699d82d43d?auto=format&fit=crop&w=800&q=80"
]

for url in urls:
    try:
        r = requests.head(url, timeout=5)
        print(f"URL: {url} | Status: {r.status_code}")
    except Exception as e:
        print(f"URL: {url} | Error: {e}")
