# routes/product_routes.py
from flask import Blueprint, jsonify, request
from models import Product  # Make sure Product model exists

product_bp = Blueprint("products", __name__)  # <-- Must be product_bp

# GET all products
@product_bp.route("/", methods=["GET"])  # base URL: /api/products/
def get_products():
    products = Product.query.all()
    product_list = [
    {
        "id": p.id,
        "name": p.name,
        "price": p.price
    } for p in products
]
    return jsonify(product_list), 200

# GET single product by id
@product_bp.route("/<int:product_id>", methods=["GET"])
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify({
    "id": product.id,
    "name": product.name,
    "price": product.price
}), 200