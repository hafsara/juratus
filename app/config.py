import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'my_secret_key'
    SQLALCHEMY_DATABASE_URI = 'postgresql://hafsa:toto@localhost/formulaire_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
