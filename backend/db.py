import pymongo 
import os

from dotenv import load_dotenv

load_dotenv()

MONGO_PASS = os.environ.get("MONGO_PASS1")

if not MONGO_PASS:
    raise ValueError("MONGOPASS environment variable is not set.")

# Format the URI with the password
#uri = f"mongodb+srv://elenanana0903:{MONGO_PASS}@cluster0.wzob5nf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

#Xenas uri
uri = f"mongodb+srv://xenap26:{MONGO_PASS}@cluster0.wzob5nf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

cluster = pymongo.MongoClient(uri)
db = cluster["UserData"]
collection = db["flask_mongo"]