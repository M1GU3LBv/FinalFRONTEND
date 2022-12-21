import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.scss']
})
export class RequisitosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let hola = (event)=>{
    let archivo = new FileReader();

    archivo.readAsDataURL(event.target.files[0])
  
  }
  }
}
