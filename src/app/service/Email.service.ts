import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Organizacion} from '../models/Organizacion';
import {Solicitud} from '../models/Solicitud';
import {Email} from '../models/Email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  SendEmail = 'http://10.147.19.229:8080/email/send-html';


  constructor(private httpClient: HttpClient) {
  }


  public enviar(email: Email): Observable<any> {

    return this.httpClient.post<any>(this.SendEmail, email);
  }
}
