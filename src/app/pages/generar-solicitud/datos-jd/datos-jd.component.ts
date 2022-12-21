import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TemportalidService} from '../../../service/temportalid.service';

import {ProcessService} from '../../../service/process.service';
import {Solicitud} from '../../../models/Solicitud';

import {WeaaService} from '../../../service/weaa.service';

@Component({
  selector: 'app-datos-jd',
  templateUrl: './datos-jd.component.html',
  styleUrls: ['./datos-jd.component.css']
})
export class DatosdemiJuntaDirectivaComponent implements OnInit {

  @Input () dataentrante: any;

  solicitud: Solicitud;
  idos: number;
  estado = '0';
  f_ingreso = 'curdate()';
  n_expediente = '0';
  tipo = 'solicitud';
  i_gob: string;
  public nashei:Array<any> =[];
  f_gob: string;

  constructor(private temportalidService: TemportalidService, private processService: ProcessService, private weaaservice: WeaaService) {
  }

  ngOnInit(): void {
    console.log(this.dataentrante);
  }

  Solicitud(): void {
    this.temportalidService.disparador.subscribe(
      data => {
        this.nashei.push(data);
      }
    );
console.log(this.nashei);

    this.solicitud = new Solicitud(this.idos, this.estado, this.n_expediente, this.tipo, this.i_gob, this.f_gob);
    console.log(this.solicitud);

    // this.weaaservice.soli(this.solicitud).subscribe(
    //
    //   (Response) => {
    //     this.idsolicitud = Response.mensaje;
    //   }
    // );
  }


  // onreniec(): void {
  //
  //   // var tableRef = document.getElementsByTagName('sexo');
  //   // let row = document.createElement('tr');
  //
  //
  //   // this.personareniec = new Personareniec(this.dni.nativeElement.value);
  //   //    this.reniecservice.persona(this.personareniec).subscribe(
  //   //     (Response)=>{
  //   //       console.log(Response);
  //   //    this.nashe[1] = Response;
  //   //    console.log(this.nashe);
  //   //     },
  //   //     err => {
  //
  //   //       if (err.error.message == "Not found"){ Swal.fire(
  //   //         'DNI: '+this.personareniec.dni,
  //   //         "No encontrado o invalido",
  //   //         'error'
  //   //       ) }
  //
  //   //     }
  //   //    );
  //
  // }


}

