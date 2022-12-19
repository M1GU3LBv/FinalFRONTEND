import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  roles: string[];
  isAdmin = false;
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {


    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

}
