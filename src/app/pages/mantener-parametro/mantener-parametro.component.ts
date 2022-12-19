import { Component, OnInit } from '@angular/core';
import { Parametros } from 'src/app/models/parametros';
import { datosService } from 'src/app/service/datosSolicitud.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-mantener-parametro',
    templateUrl: './mantener-parametro.component.html',
    styleUrls: ['./mantener-parametro.component.css'],
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

    
        const parametros = new Parametros(this.tipoparametro,this.nombre);
        console.log(parametros)
           this.service.save(parametros).subscribe(
             data => {
                    Swal.fire(
                    'Parametro: '+this.parametros.tipoparametro + this.parametros.nombre,
                    data.mensaje,
                    'success'
                  )
             }, err => {
        
              console.log (err.message);
      
      
              
             
             
            }
            
           );
       
       
         }
    }
