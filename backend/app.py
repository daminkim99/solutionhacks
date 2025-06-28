import pymongo 
from pymongo import MongoClient
import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

#getting the environment variable for MongoDB password

# MONGO_PASS = os.environ.get("MONGO_PASS")  # Safely get the password from env
# print(f"MONGO_PASS: {MONGO_PASS}")
# if not MONGO_PASS:
#     raise ValueError("MONGOPASS environment variable is not set.")

# # Format the URI with the password
# uri = f"mongodb+srv://xenap26:{MONGO_PASS}@cluster0.dsiruap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# cluster = MongoClient(uri)

#Elena's MongoDB Cluster

MONGO_PASS = os.environ.get("MONGO_PASS1")  # Safely get the password from env

if not MONGO_PASS:
    raise ValueError("MONGOPASS environment variable is not set.")

# Format the URI with the password
uri = f"mongodb+srv://elenanana0903:WPIkxTMoxDQsjXJR@cluster0.wzob5nf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
cluster = MongoClient(uri)

#Testing the connection
# db = cluster["UserData"]
# collection = db["flask_mongo"]
# collection.insert_one({"_id":3, "user_name":"Elena"})
# collection.insert_one({"_id":100, "user_name":"Xena"})

#routes 
@app.route("/")
def home():
    return "MongoDB + Flask API is running!"


if __name__ == "__main__":
    app.run(debug=True)