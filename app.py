from app import create_app
from flask_cors import CORS

app = create_app()

# Activer CORS pour permettre les requêtes provenant de l'application Angular
CORS(app, resources={r"/api/*": {"origins": "http://localhost:4200"}})

if __name__ == "__main__":
    app.run(debug=True)
