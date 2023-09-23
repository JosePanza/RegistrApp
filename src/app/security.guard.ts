import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {StateService} from '../app/state/state.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor( 

    private loginService:StateService,
    private router:Router

  ){}

  canActivate():boolean{

    let nombre:boolean = false;
    this.loginService.getNombre.subscribe((value)=>{
      nombre=value;
      if(!value){
        this.router.navigateByUrl('/inicio');

      }

    
  });
    return nombre
  }
    
  
  
}
