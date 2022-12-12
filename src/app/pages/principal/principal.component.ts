import { Component, OnInit,HostListener } from '@angular/core';
import { RequisitoService } from 'src/app/service/requisito.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  repos: any;

  constructor( private requisitoService : RequisitoService) { }

  ngOnInit(): void {
    
    this.requisitoService.requisitos().subscribe(
      (Response)=>{
        console.log(Response[1])
        this.repos = Response; 
      }
     );
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
   if (
     document.body.scrollTop > 100 ||
     document.documentElement.scrollTop > 100
   ) {
     document.getElementById('appear')?.classList.add('active')
   }
   else(
     document.getElementById('appear')?.classList.remove('active')
   )
 }
 title = 'WhatsApp';
}

