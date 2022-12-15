import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Profileservice } from "src/app/service/profile.service";
@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  nombre : string;
  roles: string[];
  isAdmin = false;
  amat: any;
  apat: any;
  email: any;
  dni: any;
  constructor(
    private profileservice :  Profileservice ,private tokenService: TokenService) { }


  ngOnInit(): void {
    this.cargarperfil();
  
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    
   


  }

  cargarperfil():void{ this.profileservice.profile().subscribe(
    (Response)=>{
     this.nombre = Response.nombre;
      this.apat = Response.apellido_pat;
      this.amat = Response.apellido_mat;
      this.email = Response.email;
      this.dni = Response.nombreUsuario;
      
    }
   );}
}
