import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NuevaPersona } from 'src/app/models/NuevaPersona';
import { Personareniec } from 'src/app/models/Personareniec';
import { Usuarionew } from 'src/app/models/Usuarionew';
import { AuthService } from 'src/app/service/auth.service';
import { Reniecservice } from 'src/app/service/reniec.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nuevaPersona: NuevaPersona;
  usuarionew: Usuarionew;
  idpersona: string;
  nombreUsuario : string;
  personareniec: Personareniec;
  nombre: any;
  
  nombres_pers : string;
  apellido_pat : string;
  apellido_mat : string;
  dni : string;
  correo : string;
  f_nacimiento : string;
  telefono : string;
  direccion : string;

  reniecapellido_pat : string;
  reniecapellido_mat  : string;

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
         this.nombres_pers = Response.nombres;
         this.apellido_pat =Response.apellidoMaterno;
         this.apellido_mat = Response.apellidoPaterno;
        }
       );
       
     }
  onRegister(): void {

    
    this.nuevaPersona = new NuevaPersona(this.nombres_pers, this.apellido_pat, this.apellido_mat, this.dni, this.correo, this.f_nacimiento,this.telefono,this.direccion);
   console.log(this.nuevaPersona)
    this.authService.nuevo(this.nuevaPersona).subscribe(
      data => {

        this.idpersona = data.mensaje;
        this.nombreUsuario = this.dni;
        this.Registrarusuario();
     console.log(data);
     
      },
      err => {
        this.errMsj = err.error.mensaje;
       
       console.log(err);
      }
    );






  }


  Registrarusuario():void{

    
 this.usuarionew = new Usuarionew(this.idpersona, this.nombreUsuario, this.password);
 
    this.authService.user(this.usuarionew).subscribe(
      data => {
        
        
        this.router.navigate(['/login']);
        
      },
      err => {
        
       
       console.log(err);
      }
    );


  }
}
