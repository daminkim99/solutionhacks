from flask import Blueprint,Flask, request, jsonify
from user.models import User

user_bp = Blueprint('user', __name__)

@user_bp.route("/user/signup", methods=["POST"])
def signup():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid or missing JSON"}), 400

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not all([name, email, password]):
        return jsonify({"error": "Missing fields"}), 400

    try:
        user = User.signup(data)
        return jsonify(user), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@user_bp.route("/user/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid or missing JSON"}), 400

    email = data.get('email')
    password = data.get('password')

    if not all([email, password]):
        return jsonify({"error": "Missing fields"}), 400

    # Here you would typically check the credentials against a database
    # For now, we will just return a success message
    user = User.login(data)

    if user:
        return user
    else:
        return jsonify({"error": "Invalid credentials"}), 401

 #Adding a task route 

@user_bp.route("/tasks", methods=["POST"])
def add_task():
    data = request.get_json()
    print("Data is ", data)
    if not data:
        return jsonify({"error": "Invalid or missing JSON"}), 400

    # Here you would typically save the task to a database
    # For now, we will just return the received data
    # return jsonify({"task": data}), 201

    try:
        result = User.add_task(data) 
        return jsonify({"message": "Task added successfully", "task": result}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    return "SUCCESSFUL"



@user_bp.route('/test', methods=['POST'])
def test_post():
    data = request.get_json()
    return jsonify({"received": data}), 200