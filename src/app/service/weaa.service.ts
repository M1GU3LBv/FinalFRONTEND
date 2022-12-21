import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Organizacion} from '../models/Organizacion';
import {Solicitud} from '../models/Solicitud';

@Injectable({
  providedIn: 'root'
})

export class WeaaService {

  ss = 'http://10.147.19.229:8080/process/';

  constructor(private httpClient: HttpClient) {
  }


  // public new(organizacion: Organizacion): Observable<any> {
  //
  //   return this.httpClient.post<any>(this.Organizacion, organizacion);
  // }

  public save(producto: Solicitud): Observable<any> {
    return this.httpClient.post<any>(this.ss + 'nueva', producto);
  }
}
