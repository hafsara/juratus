import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormDetailComponent } from './components/form-detail/form-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormComponent,
    FormListComponent,
    FormDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
