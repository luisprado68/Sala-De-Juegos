import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import {first} from 'rxjs/operators'
//import { User } from 'firebase';
//import { auth } from 'firebase/app';


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
  
  constructor( public  afAuth:AngularFireAuth) { }

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

   async login(email:string,password:string){
      let resultado;
     try{
      
       resultado = await this.afAuth.signInWithEmailAndPassword(email,password);
      
     }
     catch(error){
       console.log(error);
     }
     finally{
      return resultado;
     }
     
    
  }
  async registrar(email:string,password:string){
    let resultado;
    try{
       resultado = await this.afAuth.createUserWithEmailAndPassword(email,password);
    }
    catch(error){
      console.log(error);
    }
    finally{
      return resultado;
    }
    
   
  }
  async logout(){
    try{
      await this.afAuth.signOut();
      //en caso de tener informacion en local strorage la eliminanosm
    }
    catch(error){
      console.log(error);
    }
  
    
  }
  obtenerUsuario(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
