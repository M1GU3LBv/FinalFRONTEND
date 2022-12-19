import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parametros } from '../models/parametros';


@Injectable({
  providedIn: 'root'
})

export class ParametroService{
  nuevo = 'https://10.147.19.229:8080/api/nuevo/parametro';
 
  constructor(private httpClient: HttpClient) {}
    
public new(parametros: Parametros): Observable<any> {
  console.log(parametros);
  return this.httpClient.post<any>(this.nuevo , parametros);
}
}