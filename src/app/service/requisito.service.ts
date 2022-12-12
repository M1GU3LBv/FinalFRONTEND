import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequisitoService{
 
 requisito = 'http://10.147.19.229:8080/api/requisito';

  constructor(private httpClient: HttpClient) {}
    
  public requisitos(): Observable<any>{
       
        return this.httpClient.get(this.requisito);




    }
  
  
  
}