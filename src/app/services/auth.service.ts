import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario:string="";
  usuarioLogueado:string="";
  nombre:string="";
  apeliido:string="";
  correo:string ="";
  pass:string = "";
  passConfirm:string ="";
  
  constructor() { }

  //valida si es string y no un numero
  validarString(myString: string) : boolean {
    return typeof myString === 'string' && myString.trim().length !=0  && isNaN(parseInt(myString)) == true;
  }
  validarMail(search:string):boolean
  {
      let  serchfind:boolean;

      const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

      serchfind = emailRegex.test(search);

      console.log(serchfind)
      return serchfind
  }
  validar(myString: string) : boolean {
    return typeof myString === 'string' && myString.trim().length !=0 ;
  }

}
