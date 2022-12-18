import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganizacionesService{
 
 url = 'http://10.147.19.229:8080/organizaciones/listar';

  constructor(private httpClient: HttpClient) {}
    
  public organizaciones(): Observable<any>{
       
        return this.httpClient.get(this.url);




    }
  
  
  
}