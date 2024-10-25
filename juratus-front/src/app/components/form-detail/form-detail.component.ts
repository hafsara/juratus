import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  form: any = {};

  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.formService.getFormDetails(id).subscribe(data => {
      this.form = data;
    });
  }

  submitResponse() {
    // Logique pour soumettre une réponse
  }
}
