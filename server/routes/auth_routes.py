# routes/auth_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from werkzeug.security import generate_password_hash, check_password_hash
from models import User

auth_bp = Blueprint("auth", __name__)

# Register user
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "User already exists"}), 400

    hashed_password = generate_password_hash(password)
    user = User(username=username, email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

# Login user
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid credentials"}), 401

    # For simplicity, just return user info (later add JWT)
    return jsonify({"message": "Login successful", "user": {"id": user.id, "username": user.username, "email": user.email}})