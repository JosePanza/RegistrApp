import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rcontrasena',
  templateUrl: './rcontrasena.page.html',
  styleUrls: ['./rcontrasena.page.scss'],
})
export class RcontrasenaPage implements OnInit {
  formularioRecuperar:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 
    this.formularioRecuperar = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]

  })
}
  
  ngOnInit() {
  }

  volverlogin(){
    this.router.navigate(['/pag-principal'])
  }

  

}
