import pymongo 
from pymongo import MongoClient
import os

#getting the environment variable for MongoDB password
MONGO_PASS = os.environ.get("MONGO_PASS")  # Safely get the password from env
if not MONGO_PASS:
    raise ValueError("MONGOPASS environment variable is not set.")

# Format the URI with the password
uri = f"mongodb+srv://xenap26:{MONGO_PASS}@cluster0.dsiruap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
cluster = MongoClient(uri)


db = cluster["UserData"]
collection = db["flask_mongo"]

collection.insert_one({"_id":3, "user_name":"Elena"})
collection.insert_one({"_id":100, "user_name":"Xena"})