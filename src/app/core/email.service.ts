import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl:string = environment.apiUrl;
  headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  sendEmail(formData:FormData):Observable<any> {
    console.log('Sending email',formData);
    return this.http.post<any>(`${this.baseUrl}/api/email/send-message`, formData, {headers:this.headers});
  }
}
