import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Assure-toi d'importer FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ExempleComponent } from './exemple/exemple.component';
import { CreateFormComponent } from './create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ExempleComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Assure-toi que FormsModule est bien dans les imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
