from flask import request, jsonify
from flask_restx import Namespace, Resource, fields
from app.models import db, Form, Response, User

# Définition de l'espace de noms pour l'API
api = Namespace('forms', description="Opérations liées aux formulaires")

# Modèle de formulaire pour Swagger
form_model = api.model('Form', {
    'title': fields.String(required=True, description="Titre du formulaire"),
    'userEmail': fields.String(required=True, description="Email de l'utilisateur"),
    'managerEmail': fields.String(required=True, description="Email du manager"),
    'theHiveTicket': fields.String(required=True, description="Ticket TheHive"),
    'escalate': fields.Boolean(required=True, description="Indique si l'escalade est activée"),
    'fields': fields.List(fields.Raw, description="Liste des champs dynamiques du formulaire")
})

# Route pour créer un formulaire
@api.route('/form')
class FormResource(Resource):
    @api.expect(form_model)
    @api.response(201, 'Formulaire créé avec succès')
    @api.response(400, 'Champs obligatoires manquants')
    def post(self):
        """Créer un nouveau formulaire"""
        data = request.json
        if not all(k in data for k in ('title', 'userEmail', 'managerEmail', 'theHiveTicket', 'escalate')):
            return {'error': 'Champs obligatoires manquants'}, 400

        form = Form(
            title=data['title'],
            user_email=data['userEmail'],
            manager_email=data['managerEmail'],
            the_hive_ticket=data['theHiveTicket'],
            escalate=data['escalate'],
            fields=data['fields']
        )

        db.session.add(form)
        db.session.commit()
        return {'message': 'Formulaire créé avec succès', 'form_id': form.id}, 201

# Route pour récupérer tous les formulaires
@api.route('/forms')
class FormListResource(Resource):
    @api.response(200, 'Liste de formulaires récupérée avec succès')
    def get(self):
        """Récupérer tous les formulaires"""
        forms = Form.query.all()
        return [form.to_dict() for form in forms], 200
# Modèle de réponse pour Swagger
response_model = api.model('Response', {
    'user_id': fields.Integer(required=True, description="ID de l'utilisateur"),
    'answers': fields.List(fields.Raw, description="Liste des réponses aux champs du formulaire")
})

@api.route('/form/<int:form_id>/response')
class ResponseResource(Resource):
    @api.expect(response_model)
    @api.response(201, 'Réponse soumise avec succès')
    @api.response(400, 'Données de réponse invalides')
    def post(self, form_id):
        """Soumettre une réponse à un formulaire"""
        data = request.json
        response = Response(form_id=form_id, user_id=data['user_id'], answers=data['answers'])
        db.session.add(response)
        db.session.commit()
        return {'message': 'Réponse soumise avec succès'}, 201
