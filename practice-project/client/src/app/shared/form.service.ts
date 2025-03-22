import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'https://server-pu4rc8c5u-ubdales-projects-04a6989b.vercel.app/form';

  constructor(private https: HttpClient) {}

  submitForm(data: any): Observable<any> {
    return this.https.post<any>(this.apiUrl, data);
  }
}
