import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parametros } from '../models/parametros';


@Injectable({
  providedIn: 'root'
})

export class datosService{
  url3 = 'http://10.147.19.229:8080/api/nuevo/parametro';
  url2 = 'http://10.147.19.229:8080/api/listar/parametros';
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

  public all(): Observable<any>{
       
    return this.httpClient.get(this.url2);




}

public add(parametros:Parametros): Observable<any>{
       
  return this.httpClient.post<any>(this.url3, parametros);




}
}