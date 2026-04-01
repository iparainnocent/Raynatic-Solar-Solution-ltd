# routes/contact_routes.py
from flask import Blueprint, request, jsonify
from extensions import db
from models import Contact

contact_bp = Blueprint("contact", __name__)

# Submit contact message
@contact_bp.route("/", methods=["POST"])
def submit_contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    message = data.get("message")

    contact = Contact(name=name, email=email, phone=phone, message=message)
    db.session.add(contact)
    db.session.commit()

    return jsonify({"message": "Message sent successfully"}), 201

# Get all contact messages (admin use)
@contact_bp.route("/", methods=["GET"])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([{
        "id": c.id,
        "name": c.name,
        "email": c.email,
        "phone": c.phone,
        "message": c.message
    } for c in contacts])