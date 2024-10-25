import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:5000';  // URL du backend Flask

  constructor(private http: HttpClient) {}

  createForm(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/form`, formData);
  }

  getForms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/forms`);
  }

  getFormDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/form/${id}`);
  }
}
