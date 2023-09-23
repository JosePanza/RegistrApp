import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
<<<<<<< HEAD
  public nombre : boolean = false;
  constructor(private stateService:StateService, private router:Router) { 
=======
  public nombre : string = ''
  constructor(private router:Router, private servicion :StateService) { 

    this.servicion.getNombre.subscribe((nombre)=> {this.nombre = nombre})
>>>>>>> 0211864d1b7a88a7501e9b5f0611b4b3972c9fbb

  }

  ngOnInit() {

    this.stateService.getNombre.subscribe((nombre)=>{
      this.nombre=nombre;

    }
    )

  }
  volverlogin(){
    this.router.navigate(['/pag-principal'])
  }

}
