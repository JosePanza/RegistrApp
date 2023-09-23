import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

<<<<<<< HEAD
  
  private nombre:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
=======
  nombre:BehaviorSubject<string> = new BehaviorSubject('')
  private isLogged:BehaviorSubject<boolean> = 
  new BehaviorSubject <boolean>(false);
>>>>>>> 0211864d1b7a88a7501e9b5f0611b4b3972c9fbb

  get getNombre(){
    return  this.nombre.asObservable();
  }

<<<<<<< HEAD
  set setNombre(value: boolean){
    this.nombre.next(value);
=======
  set setNombre(nombre: string){
    this.nombre.next(nombre)
>>>>>>> 0211864d1b7a88a7501e9b5f0611b4b3972c9fbb
  }

   getIsLogged(){
    return this.isLogged.asObservable();
  }

   SetIsLogged(value:boolean){
     this.isLogged.asObservable();
  }
  constructor() { }
}
