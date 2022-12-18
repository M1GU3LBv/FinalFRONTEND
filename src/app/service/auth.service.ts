import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevaPersona } from '../models/NuevaPersona';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { Usuarionew } from '../models/Usuarionew';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://10.147.19.229:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevaPersona: NuevaPersona): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevoP', nuevaPersona);
  }

  public user(usuarionew: Usuarionew): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', usuarionew);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
