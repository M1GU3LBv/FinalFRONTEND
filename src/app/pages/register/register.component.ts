import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { Personareniec } from 'src/app/models/Personareniec';
import { AuthService } from 'src/app/service/auth.service';
import { Reniecservice } from 'src/app/service/reniec.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nuevoUsuario: NuevoUsuario;
  nombre = "Nombre";
  dni : string;
  personareniec: Personareniec;
  apellido_pat =  "Apellido Paterno";
  apellido_mat =  "Apellido Materno";
  nombreUsuario: string;
  email: string;
  password: string;
  
  errMsj: string;
  isLogged = false;
  @ViewChild('myNameElem') myNameElem: ElementRef;
  constructor(
    private reniecservice : Reniecservice,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
   ) { }




  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onreniec(): void {

  


    this.personareniec = new Personareniec(this.myNameElem.nativeElement.value);
       this.reniecservice.persona(this.personareniec).subscribe(
        (Response)=>{
         this.nombre = Response.nombres;
         this.apellido_mat =Response.apellidoMaterno;
         this.apellido_pat = Response.apellidoPaterno;
        }
       );
       
     }
  onRegister(): void {

    console.log(this.nombreUsuario)
    this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreUsuario,this.apellido_pat,this.apellido_mat, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
       
       console.log(err.error.message);
      }
    );
  }
}
