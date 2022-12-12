import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RecupecontraComponent } from '../../pages/recupecontra/recupecontra.component';
import { IngrecodigoComponent } from '../../pages/ingrecodigo/ingrecodigo.component';
import { IngrenuevacontraComponent } from '../../pages/ingrenuevacontra/ingrenuevacontra.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { PrincipalComponent } from '../../pages/principal/principal.component';
import { OrganizacionesComponent } from '../../pages/organizaciones/organizaciones.component';
import { AdminmuestraComponent } from '../../pages/adminmuestra/adminmuestra.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    PrincipalComponent,
    OrganizacionesComponent,
    LoginComponent,
    RecupecontraComponent,
    IngrecodigoComponent,
    IngrenuevacontraComponent,
    RegisterComponent,
    AdminmuestraComponent
   
  ]
})
export class AuthLayoutModule { }
