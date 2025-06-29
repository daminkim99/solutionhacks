from flask import Flask , jsonify
from flask_pymongo import PyMongo
from flask import current_app
from db import collection
from bson.objectid import ObjectId
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
        
    def add_task(data):

    # Get the user email from the data
        user_email = data.get("email")
    
    # Create the new task using your existing structure
        new_task = {
            "task_id": str(ObjectId()),  # Add a unique task ID
            "name": data.get("name"),
            "task": data.get("task"),
            "address": data.get("address"),
            "date": data.get("date"),
            "description": data.get("description"),  
            "accepted": False
            }
    
    # Find the user and update their tasks array
        result = collection.update_one(
            {"email": user_email},
            {"$push": {"tasks": new_task}}
        )
    
        if result.modified_count:
            return new_task
        else:
            # If no tasks array exists yet, create it
            result = collection.update_one(
                {"email": user_email},
                {"$set": {"tasks": [new_task]}}
            )
        if result.modified_count:
            return new_task
        else:
            return None