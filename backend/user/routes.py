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

@user_bp.route("/tasks", methods=["GET"])
def get_user_tasks():
    # Get the current user's email from the query parameter
    user_email = request.args.get("email")
    
    if not user_email:
        return jsonify({"error": "Email parameter is required"}), 400
        
    try:
        # Change this line to use get_user_tasks instead of get_other_users_tasks
        tasks = User.get_user_tasks(user_email)
        return jsonify({"tasks": tasks}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@user_bp.route("/other-tasks", methods=["GET"])
def get_other_tasks():
    """
    Endpoint to get all tasks from users other than the one specified.
    """
    user_email = request.args.get("email")
    if not user_email:
        return jsonify({"error": "Current user email parameter is required"}), 400
    
    try:
        tasks = User.get_other_users_tasks(user_email)
        return jsonify({"tasks": tasks}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@user_bp.route("/task/accept", methods=["POST"])
def accept_task_route():
    """
    Endpoint to accept a task. Expects a JSON body with 'task_id' and 'acceptor_email'.
    """
    data = request.get_json()
    task_id = data.get("task_id")
    acceptor_email = data.get("acceptor_email")

    if not task_id or not acceptor_email:
        return jsonify({"error": "Missing task_id or acceptor_email"}), 400

    success = User.accept_task(task_id, acceptor_email)

    if success:
        return jsonify({"message": "Task accepted successfully"}), 200
    else:
        return jsonify({"error": "Task not found or could not be updated"}), 404


@user_bp.route('/test', methods=['POST'])
def test_post():
    data = request.get_json()
    return jsonify({"received": data}), 200