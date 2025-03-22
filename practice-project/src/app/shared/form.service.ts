import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:4000/form';

  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
