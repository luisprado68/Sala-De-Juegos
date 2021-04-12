import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  correo:string ="";
  constrasena:string ="";             
  
  constructor(
    private AuthService:AuthService,
    private router:Router ) {
      
  }
  Logueo(){

    if(
        this.AuthService.validarMail(this.correo)&&
        this.AuthService.validar(this.constrasena)
        ){

          if(this.correo == this.AuthService.correo &&
            this.constrasena == this.AuthService.pass){
                 //una vez valiadodo se debe redirifigri a home
                 this.AuthService.usuarioLogueado = this.AuthService.nombre;
                this.router.navigate(['home']);
            }
            else{
              alert('Correo o usuario no coincide!');
            }
          
      }
      else{
        alert('Ingrese datos validos');
      }
      
  }
}
