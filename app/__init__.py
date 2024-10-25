from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restx import Api

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    # Initialisation de l'API avec Flask-RESTX
    api = Api(app, version="1.0", title="Form Management API", description="Documentation de l'API pour la gestion de formulaires")

    db.init_app(app)
    migrate.init_app(app, db)

    from app.routes import api as form_api
    api.add_namespace(form_api, path="/api")

    return app
