import { Component, OnInit } from '@angular/core';
import { datosService } from 'src/app/service/datosSolicitud.service';
@Component({
  selector: 'app-generar-solicitud',
  templateUrl: './generar-solicitud.component.html',
  styleUrls: ['./generar-solicitud.component.css']
})
export class GenerarSolicitudComponent implements OnInit {
  tipo: any;
  zona: any;
  nivel: any;

  constructor(private service : datosService ) { }

  ngOnInit(): void {
    this.service.tipo().subscribe(
      (Response)=>{
       
        this.tipo = Response; 

       
       
      }
     );
     this.service.zona().subscribe(
      (Response)=>{
       
        this.zona = Response; 

       
      }
     );

     this.service.nivel().subscribe(
      (Response)=>{
       
        this.nivel = Response; 

      
      }
     );
  }

}
