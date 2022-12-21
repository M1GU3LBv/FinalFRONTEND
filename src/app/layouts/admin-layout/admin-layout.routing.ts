import { Routes } from '@angular/router';
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
import { ListarsolisComponent } from 'src/app/pages/listarsolis/listarsolis.component';
import { SolisrechazosReComponent } from '../../pages/solicitudes-rechazadas/solisrechazos-re/solisrechazos-re.component';
import { MosjdComponent } from '../../pages/mi-organizacion-social/mosjd/mosjd.component';
import { MosmiembrosComponent } from '../../pages/mi-organizacion-social/mosmiembros/mosmiembros.component';
import { MosdocumentosComponent } from '../../pages/mi-organizacion-social/mosdocumentos/mosdocumentos.component';
import { ProdGuardService as guard } from 'src/app/guards/prod-guard.service';


export const AdminLayoutRoutes: Routes = [
    { path: 'inicio', component: InicioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'mi-perfil', component: MiPerfilComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'form-perfil', component: FormPerfilComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'mi-organizacion-social', component: MiOrganizacionSocialComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'generar-solicitud', component: GenerarSolicitudComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'datos-jd', component: DatosdemiJuntaDirectivaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'datos-miembros', component: DatosdeMiembrosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'r-documentos', component: RDocumentosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'nexpediente', component: NexpedienteComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'valisoli', component: ValisoliComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'requisitos', component: RequisitosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'organizaciones-sociales', component: OrganizacionesSocialesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'solicitudes-rechazadas', component: SolirechazosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'genresolucion', component: GenresolucionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'mantener-parametro', component: MantenerParametroComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'asignar-roles', component: AsignarRolesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'mantener-privilegio', component: MantenerPrivilegioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'listarsolis', component: ListarsolisComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'solisre', component: SolisrechazosReComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'mosjd', component: MosjdComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'mosmiembros', component: MosmiembrosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
    { path: 'mosdocumentos', component: MosdocumentosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
];
