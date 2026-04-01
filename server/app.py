import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from config import Config
from extensions import db, migrate

# Import routes
from routes.auth_routes import auth_bp
from routes.product_routes import product_bp
from routes.contact_routes import contact_bp
from routes.admin_routes import admin_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # ✅ Allow frontend (React + Render)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(product_bp, url_prefix="/api/products")
    app.register_blueprint(contact_bp, url_prefix="/api/contact")
    app.register_blueprint(admin_bp, url_prefix="/api/admin")

    # ✅ Test route
    @app.route("/")
    def home():
        return {"message": "Backend is running!"}

    # ✅ Checkout route (TEST VERSION)
    @app.route("/api/checkout", methods=["POST"])
    def checkout():
        try:
            data = request.get_json()
            print("RECEIVED DATA:", data)

            return jsonify({
                "success": True,
                "message": "Checkout API working"
            }), 200

        except Exception as e:
            print("ERROR:", str(e))
            return jsonify({
                "success": False,
                "message": str(e)
            }), 500

    return app


app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))