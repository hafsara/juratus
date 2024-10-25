import { Component } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent {
  formTitle: string = '';  // Titre du formulaire
  fields: Array<{ type: string, value: string }> = [];  // Liste des champs du formulaire

  constructor() {}

  // Ajouter un champ de type donné
  addField(fieldType: string) {
    if (this.fields.length < 10) {
      this.fields.push({ type: fieldType, value: '' });
    } else {
      alert("Vous ne pouvez pas ajouter plus de 10 champs.");
    }
  }

  // Soumettre le formulaire et afficher les données
  submitForm() {
    console.log('Formulaire soumis:', { title: this.formTitle, fields: this.fields });
    // Ici, tu pourrais envoyer les données à un backend avec HttpClient
  }
}
