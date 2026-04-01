from app import create_app
from extensions import db
from models import Product

app = create_app()

with app.app_context():
    # Optional: Clear existing products (avoid duplicates)
    Product.query.delete()

    products = [
        {"name": "5.5kW Solar Inverter", "price": 49500},
        {"name": "Hybrid Solar Inverter", "price": 64350},
        {"name": "Solar Inverter", "price": 56000},

        {"name": "440W Solar Panel", "price": 8360},
        {"name": "550W Solar Panel", "price": 10450},
        {"name": "580W Solar Panel", "price": 11020},
        {"name": "590W Solar Panel", "price": 11210},

        {"name": "5kw hour complete system", "price": 173000},
        {"name": "5.12kW Lithium Battery 6,000cycle 10yrs warrant", "price": 125000},
        {"name": "Solar Battery", "price": 28000},
        {"name": "10kw lithium battery 7yrs warrant", "price": 198000},

        {"name": "Solar Flood Light", "price": 7500},
        {"name": "Solar Flood Light 200w 3yrs warrant", "price": 6500},
        {"name": "3000W Flood Light", "price": 25000},

        {"name": "Solar Pump 2 inch", "price": 39000},
        {"name": "Solar Pump 3 inch", "price": 44000},
        {"name": "Hybrid Solar water Pump", "price": 44000},

        {"name": "Solar Fridge", "price": 55000},

        {"name": "Solar Water Heater 200L low pressure", "price": 95000},
        {"name": "Solar Water Heater System 300 flatplate high pressure", "price": 155000},
    ]

    for item in products:
        product = Product(
            name=item["name"],
            price=item["price"]
        )
        db.session.add(product)

    db.session.commit()
    print("✅ Products seeded successfully!")