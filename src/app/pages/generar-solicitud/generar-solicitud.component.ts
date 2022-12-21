import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {datosService} from 'src/app/service/datosSolicitud.service';

import {ProcessService} from '../../service/process.service';
import {Organizacion} from '../../models/Organizacion';
import {WeaaService} from '../../service/weaa.service';
import {Solicitud} from 'src/app/models/Solicitud';
import {EmailService} from '../../service/Email.service';
import {Email} from '../../models/Email';
import {Profileservice} from '../../service/profile.service';
import {TokenService} from '../../service/token.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-generar-solicitud',
  templateUrl: './generar-solicitud.component.html',
  styleUrls: ['./generar-solicitud.component.css']
})
export class GenerarSolicitudComponent implements OnInit {
  @ViewChild('fechainicio') fechainicio: ElementRef;
  @ViewChild('fechafin') fechafin: ElementRef;
  solicitud: Solicitud;
  organizacion: Organizacion;
  email: Email;
  mailFrom = 'confirmacionchacla@gmail.com';
  subject = 'Solicitud enviada';
  userName: string;
  jwt = '0';
  tipo: any;
  zona: any;
  nivel: any;
  idparametro_zona: string;
  nombre_os: string;
  idparametro_nivel: string;
  idparametro_tipo_os: string;
  estado = '0';
  idos: number;

  n_expediente = '0';
  i_gob: string;
  f_gob: string;
  mailto: any;
  mailTo: any;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private profileservice: Profileservice,
    private emailService: EmailService,
    private service: datosService,
    private weaaservice: WeaaService,
    private processService: ProcessService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.cargarperfil();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    this.service.tipo().subscribe(
      (Response) => {
        this.tipo = Response;
      }
    );
    this.service.zona().subscribe(
      (Response) => {
        this.zona = Response;
      }
    );

    this.service.nivel().subscribe(
      (Response) => {
        this.nivel = Response;
      }
    );
  }

  cargarperfil(): void {
    this.profileservice.profile().subscribe(
      (Response) => {


        this.email = new Email(this.mailFrom, Response.persona.correo, this.subject, Response.persona.nombres_pers, this.jwt);
      }
    );
  }

  OnOrganizacion(): void {
    this.organizacion = new Organizacion
    (this.idparametro_zona, this.nombre_os, this.estado, this.idparametro_nivel, this.idparametro_tipo_os);
    // this.processService.new(this.organizacion).subscribe(
    //   (Response) => {
    //     this.idos = Response.mensaje;
    //     console.log(this.idos);
    //     this.EmailVerifica();
    //     this.OnSolicitud();
    //   }
    // );
    this.processService.new(this.organizacion).subscribe(
      data => {

        this.idos = data.mensaje;


        this.OnSolicitud();

      },
      err => {

        console.log(err);


      }
    );

  }

  OnSolicitud(): void {
    const headers = {'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar'};
    this.tipo = 'solicitud';
    this.i_gob = this.fechainicio.nativeElement.value.toString();
    this.f_gob = this.fechafin.nativeElement.value.toString();
    this.solicitud = new Solicitud(this.idos, this.estado, this.n_expediente, this.tipo, this.i_gob, this.f_gob);

    this.http.post<any>('http://10.147.19.229:8080/process/nueva', this.solicitud, {headers}).subscribe(data => {
      console.log(data);
      this.EmailVerifica();
    });


    // this.weaaservice.save(this.solicitud).subscribe(
    //   (Data) => {
    //     console.log(Data);
    //
    //   }
    // );
    // this.weaaservice.save(this.solicitud).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  EmailVerifica(): void {


    // this.emailService.enviar(this.email).subscribe(
    //   (Data) => {
    //
    //   }
    // );
    console.log(this.email);
    this.emailService.enviar(this.email).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );

  }


}



