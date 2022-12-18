import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class datosService{
 
 url = 'http://10.147.19.229:8080/api/tipo/tipoparametro?tipoparametro=';

  constructor(private httpClient: HttpClient) {}
    
  public zona(): Observable<any>{
       
        return this.httpClient.get(this.url+'zona');




    }
  
    public tipo(): Observable<any>{
       
        return this.httpClient.get(this.url+'tipo');




    }


    public nivel(): Observable<any>{
       
      return this.httpClient.get(this.url+'nivel');




  }



  
}