from flask import Flask , jsonify
from flask_pymongo import PyMongo
from flask import current_app
from db import collection
mongo = PyMongo()

class User: 
    def signup(data):
    
        user = {
        "_id":"",
        "name": data.get("name"),
        "email":data.get("email"),
        "password":data.get("password"),
        }
        return user
    
    def login(data):
        user = collection.find_one({"email": data.get("email")})
        if user and user["password"] == data.get("password"):  # plain text check!
            user.pop("password")
            return user
        else:
            return None