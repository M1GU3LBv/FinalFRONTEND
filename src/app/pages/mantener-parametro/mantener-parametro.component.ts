import { Component, OnInit } from '@angular/core';
import { datosService } from 'src/app/service/datosSolicitud.service';

@Component({
    selector: 'app-mantener-parametro',
    templateUrl: './mantener-parametro.component.html',
    styleUrls: ['./mantener-parametro.component.css'],
})

export class MantenerParametroComponent implements OnInit {
    all: any;
    constructor(private service : datosService) { }

    ngOnInit(): void {


        this.service.all().subscribe(
            (Response)=>{
           
              this.all = Response; 
      
             
            })
    }

}