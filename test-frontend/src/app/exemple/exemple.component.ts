import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrl: './exemple.component.scss'
})
export class ExempleComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'Bonjour depuis ExampleComponent!';
  }

  ngOnInit(): void {
  }

}
