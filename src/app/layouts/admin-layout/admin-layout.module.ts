import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { InicioComponent } from '../../pages/inicio/inicio.component';
import { MiOrganizacionSocialComponent } from '../../pages/mi-organizacion-social/mi-organizacion-social.component';
import { GenerarSolicitudComponent } from '../../pages/generar-solicitud/generar-solicitud.component';

import { DatosdemiJuntaDirectivaComponent } from '../../pages/generar-solicitud/datos-jd/datos-jd.component';
import { DatosdeMiembrosComponent } from 'src/app/pages/generar-solicitud/datos-miembros/datos-miembros.component';
import { RDocumentosComponent } from 'src/app/pages/generar-solicitud/r-documentos/r-documentos.component';

import { MiPerfilComponent } from '../../pages/mi-perfil/mi-perfil.component';
import { FormPerfilComponent } from '../../pages/mi-perfil/form-perfil/form-perfil.component';
import { RequisitosComponent } from '../../pages/requisitos/requisitos.component';
import { OrganizacionesSocialesComponent } from '../../pages/organizaciones-sociales/organizaciones-sociales.component';
import { SolirechazosComponent } from '../../pages/solicitudes-rechazadas/solirechazos.component';
import { NexpedienteComponent } from '../../pages/nexpediente/nexpediente.component';
import { ValisoliComponent } from '../../pages/valisoli/valisoli.component';
import { GenresolucionComponent } from '../../pages/genresolucion/genresolucion.component';
import { MantenerParametroComponent } from 'src/app/pages/mantener-parametro/mantener-parametro.component';
import { AsignarRolesComponent } from 'src/app/pages/asignar-roles/asignar-roles.component';
import { MantenerPrivilegioComponent } from 'src/app/pages/mantener-privilegio/mantener-privilegio.component';
import { ListarsolisComponent } from '../../pages/listarsolis/listarsolis.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    InicioComponent,
    MiOrganizacionSocialComponent,
    GenerarSolicitudComponent,
    RequisitosComponent,
    OrganizacionesSocialesComponent,
    MiPerfilComponent,
    FormPerfilComponent,
    SolirechazosComponent,
    DatosdemiJuntaDirectivaComponent,
    DatosdeMiembrosComponent,
    RDocumentosComponent,
    NexpedienteComponent,
    ValisoliComponent,
    GenresolucionComponent,
    MantenerParametroComponent,
    AsignarRolesComponent,
    MantenerPrivilegioComponent,
    ListarsolisComponent
  ]
})

export class AdminLayoutModule { }
