import { Component, OnInit } from '@angular/core';
import { Parametros } from 'src/app/models/parametros';
import { datosService } from 'src/app/service/datosSolicitud.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-mantener-parametro',
    templateUrl: './mantener-parametro.component.html',
    styleUrls: ['./mantener-parametro.component.scss'],
})

export class MantenerParametroComponent implements OnInit {
    parametros : Parametros;
    all: any;
  
  
    tipoparametro: string;
    nombre: string;
    constructor(private service : datosService) { }

    ngOnInit(): void {


        this.service.all().subscribe(
            (Response)=>{
           
              this.all = Response; 
      
             
            })
    }
    add(): void {

    
        this.parametros = new Parametros(this.tipoparametro,this.nombre);
        
           this.service.add(this.parametros).subscribe(
             data => {
                    Swal.fire(
                    'Parametro: '+this.parametros.tipoparametro + this.parametros.nombre,
                    data.mensaje,
                    'success'
                  )
             },
            
           );
       
       
         }
    }
