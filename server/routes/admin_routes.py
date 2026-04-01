# routes/admin_routes.py
from flask import Blueprint, jsonify, request
from extensions import db
from models import Contact, Product

admin_bp = Blueprint("admin", __name__)

# Delete a contact message
@admin_bp.route("/contacts/<int:contact_id>", methods=["DELETE"])
def delete_contact(contact_id):
    contact = Contact.query.get_or_404(contact_id)
    db.session.delete(contact)
    db.session.commit()
    return jsonify({"message": "Contact deleted successfully"})

# Add a new product
@admin_bp.route("/products", methods=["POST"])
def add_product():
    data = request.get_json()
    name = data.get("name")
    description = data.get("description")
    price = data.get("price")

    product = Product(name=name, description=description, price=price)
    db.session.add(product)
    db.session.commit()
    return jsonify({"message": "Product added successfully"}), 201

# Delete a product
@admin_bp.route("/products/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted successfully"})