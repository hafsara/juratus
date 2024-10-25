import { Component } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  formTitle: string = '';
  fields: any[] = [];

  constructor(private formService: FormService) {}

  addField(fieldType: string) {
    this.fields.push({ type: fieldType, value: '' });
  }

  submitForm() {
    const formData = {
      title: this.formTitle,
      fields: this.fields
    };
    this.formService.createForm(formData).subscribe(response => {
      console.log('Form created successfully', response);
    });
  }
}
