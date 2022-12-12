import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Personareniec} from "../models/Personareniec";

@Injectable({
  providedIn: 'root'
})
export class Reniecservice{
 
 url = 'https://dniruc.apisperu.com/api/v1/dni/';
 url2 = '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFubGxhY2FycHJvQGdtYWlsLmNvbSJ9.e6GPTZ5_3FYP3TrLUJ080WunVlQGG21ZAzOUk5B8XYU';

  constructor(private httpClient: HttpClient) {}
    
  public persona(personareniec : Personareniec ): Observable<any>{
       
        return this.httpClient.get(this.url+personareniec.dni+this.url2);


        // return this.httpClient.post<reniec>(this.url+this.dni+this.url2, personareniec);


    }
  
  
  
}