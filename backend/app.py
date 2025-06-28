import pymongo 
from pymongo import MongoClient
import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

MONGO_PASS = os.environ.get("MONGO_PASS1")  # Safely get the password from env

if not MONGO_PASS:
    raise ValueError("MONGOPASS environment variable is not set.")

# Format the URI with the password
uri = f"mongodb+srv://elenanana0903:{MONGO_PASS}@cluster0.wzob5nf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

try:
    cluster = MongoClient(uri)
    db = cluster["UserData"]
    collection = db["flask_mongo"]

    # 🔍 Test: Insert test data
    result = collection.insert_one({
        "name": "Elena",
        "email": "elena@example.com",
        "password": "password123"
    })

    print(f"✅ Successfully inserted with _id: {result.inserted_id}")

except Exception as e:
    print(f"❌ Database connection failed: {e}")

#routes 
@app.route("/")
def home():
    return "MongoDB + Flask API is running!"

if __name__ == "__main__":
    app.run(debug=True)