import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { Profileservice } from 'src/app/service/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nombreUsuario = '';
  isLogged = false;
  public focus;
  public listTitles: any[];
  public location: Location;
  nombre: any;
 
  
  constructor(
    private tokenService: TokenService,
    location: Location,  private element: ElementRef, private router: Router,private profileservice :  Profileservice) {
    this.location = location;
  }

  ngOnInit() {
   
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
      
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
      
    };
    this.listTitles = ROUTES.filter(listTitle => listTitle);

this.cargarperfil();
    

  }

  cargarperfil():void{ this.profileservice.profile().subscribe(
    (Response)=>{
      
     this.nombre = Response.persona.nombres_pers;
      
    }
   );}
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Inicio';
  }
  onLogOut(): void {
    this.tokenService.logOut();
    // window.location.reload();
  }
}
