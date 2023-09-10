import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';




@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.page.html',
  styleUrls: ['./pag-principal.page.scss'],
})
export class PagPrincipalPage implements OnInit {

  formularioIniciar:FormGroup;

  password: string = '';
  passwordVisible: boolean = false;
  constructor(private fb:FormBuilder, private router:Router, private servicion: StateService) {
    
    this.formularioIniciar = this.fb.group(
  {
    nombre: [''],
    contrasena: ['', Validators.required]
    }
    );
   }
  ngOnInit() {
  }

  
  grabarusuario() {

    
    const login = {
      nombre: this.formularioIniciar.get('nombre', )?.value,
      contrasena:this.formularioIniciar.get('contraseña')?.value
    
      
    }
    console.log(login)
    this.router.navigate(['inicio'])
    this.servicion.setnombre = login.nombre
    
  }
  recuperarcontrasena(){

    this.router.navigate(['rcontrasena'])

  }
  submitForm() {
    const nombreControl = this.formularioIniciar.get('nombre');
    
    if (nombreControl) {
      const nombreValue = nombreControl.value;
      console.log('El valor del campo nombre es:', nombreValue);
    if (this.formularioIniciar.valid) {
      this.router.navigate(['/inicio']);
  }
}
  }}