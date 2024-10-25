import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  forms: any[] = [];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.formService.getForms().subscribe(data => {
      this.forms = data;
    });
  }
}
