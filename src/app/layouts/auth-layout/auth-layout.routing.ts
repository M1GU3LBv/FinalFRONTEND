import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RecupecontraComponent } from '../../pages/recupecontra/recupecontra.component';
import { IngrecodigoComponent } from '../../pages/ingrecodigo/ingrecodigo.component';
import { IngrenuevacontraComponent } from '../../pages/ingrenuevacontra/ingrenuevacontra.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { PrincipalComponent } from '../../pages/principal/principal.component';
import { OrganizacionesComponent } from '../../pages/organizaciones/organizaciones.component';
import { AdminmuestraComponent } from '../../pages/adminmuestra/adminmuestra.component';


export const AuthLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recuperarcontra', component: RecupecontraComponent },
    { path: 'ingresarcodigo', component: IngrecodigoComponent },
    { path: 'ingresarnuevacontra', component: IngrenuevacontraComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'organizaciones', component: OrganizacionesComponent },
    { path: 'ventanaadmin', component: AdminmuestraComponent },

];
