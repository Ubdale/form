import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
