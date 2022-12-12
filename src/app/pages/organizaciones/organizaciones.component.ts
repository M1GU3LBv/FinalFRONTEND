import { Component, OnInit } from '@angular/core';
import { OrganizacionesService } from 'src/app/service/organizaciones.service';


@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.scss']
})
export class OrganizacionesComponent implements OnInit {
  repos: any;
  errorMessage: any;
  loading: boolean;
  url = 'http://10.147.19.229:8080/api/exportarPDF' ;
  constructor(private organizacionesService : OrganizacionesService ) { }







  ngOnInit(): void {

    this.organizacionesService.organizaciones().subscribe(
      (Response)=>{
       
        this.repos = Response; 
      }
     );

  }

}
