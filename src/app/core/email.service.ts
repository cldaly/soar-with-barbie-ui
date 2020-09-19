import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl:string = 'https://soar-with-barbie-svc.herokuapp.com';
  headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  sendEmail(formData:FormData):Observable<any> {
    console.log('Sending email',formData);
    return this.http.post<any>(`${this.baseUrl}/api/email/send-message`, formData, {headers:this.headers});
  }
}
