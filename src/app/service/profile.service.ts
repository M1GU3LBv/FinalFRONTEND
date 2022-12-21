import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Personareniec} from '../models/Personareniec';
import {Token} from '@angular/compiler';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class Profileservice implements OnInit {

  nombreUsuario = '';
  isLogged = false;

  url = 'http://10.147.19.229:8080/profile/detailname/';


  constructor(private tokenService: TokenService, private httpClient: HttpClient) {
  }


  ngOnInit(): void {


  }

  public profile(): Observable<any> {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();

    } else {
      this.isLogged = false;
      this.nombreUsuario = '';

    }


    return this.httpClient.get(this.url + this.nombreUsuario);


    // return this.httpClient.post<reniec>(this.url+this.dni+this.url2, personareniec);


  }


}
