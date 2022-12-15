import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
 

}
export const ROUTES: RouteInfo[] = [
  { path: '/inicio', title: 'Inicio', icon: 'fa-solid fa-house'},
  { path: '/mi-organizacion-social', title: 'Mi organización social', icon: 'fa-solid fa-people-roof'},
  { path: '/generar-solicitud', title: 'Generar solicitud', icon: 'fa-solid fa-file-circle-plus'},
  { path: '/solicitudes-rechazadas', title: 'Solicitudes rechazadas', icon: 'fa-solid fa-file-circle-xmark' },
  { path: '/requisitos', title: 'Ver requisitos', icon: 'fa-solid fa-clipboard'},
  { path: '/organizaciones-sociales', title: 'Ver organizaciones sociales', icon: 'fa-solid fa-list-check' },
  { path: '/nexpediente', title: 'Generar Nº expediente', icon: 'fa-solid fa-file-circle-plus' },
  { path: '/valisoli', title: 'Validar solicitud', icon: 'fa-solid fa-file-circle-plus' },
  { path: '/genresolucion', title: 'Generar Resolucion', icon: 'fa-solid fa-file-circle-plus' },
  { path: '/asignar-roles', title: 'Roles', icon: 'fa-regular fa-address-book'},
  { path: '/mantener-privilegio', title: 'Mantener Privilegios', icon: 'fa-solid fa-lock' },
  { path: '/mantener-parametro', title: 'Mantener Parametro', icon: 'fa-solid fa-list-check'},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  roles: string[];
  isAdmin = false;
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,
    private tokenService: TokenService) { }

  ngOnInit() {

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
