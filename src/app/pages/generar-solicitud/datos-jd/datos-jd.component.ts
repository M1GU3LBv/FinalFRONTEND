import { Component,ElementRef,OnInit, ViewChild} from '@angular/core';
import { Personareniec } from 'src/app/models/Personareniec';
import { Reniecservice } from 'src/app/service/reniec.service';
import Swal from 'sweetalert2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-datos-jd',
  templateUrl: './datos-jd.component.html',
  styleUrls: ['./datos-jd.component.css']
})
export class DatosdemiJuntaDirectivaComponent implements OnInit{
  personareniec: any;
  nombres_pers: any;
  apellido_pat: any;
  nashe: String[];



  @ViewChild('dni') dni: ElementRef;

    
    constructor(private reniecservice : Reniecservice) { }

  ngOnInit(): void {
  }

  onreniec(): void {

    // var tableRef = document.getElementsByTagName('sexo');
    // let row = document.createElement('tr');
    

    // this.personareniec = new Personareniec(this.dni.nativeElement.value);
    //    this.reniecservice.persona(this.personareniec).subscribe(
    //     (Response)=>{
    //       console.log(Response);
    //    this.nashe[1] = Response;
    //    console.log(this.nashe);
    //     },
    //     err => {

    //       if (err.error.message == "Not found"){ Swal.fire(
    //         'DNI: '+this.personareniec.dni,
    //         "No encontrado o invalido",
    //         'error'
    //       ) }
          
    //     }
    //    );
       
     }







}
