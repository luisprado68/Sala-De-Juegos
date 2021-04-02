import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

  usuarioIngresado:string;
  nombre:string="";
  apellido:string="";
  correo:string ="";
  constrasena:string ="";             
  constrasenaConfirm:string ="";

  constructor(
    private AuthService:AuthService,
    private router:Router ) {
      this.usuarioIngresado = this.AuthService.usuario;
      
     }
     Resitrarse(){
       
      // validaciones al ingresar datos
        if(this.AuthService.validarString(this.nombre)&&
        this.AuthService.validarString(this.apellido)&&
        this.AuthService.validarMail(this.correo)&&
        this.AuthService.validar(this.constrasena)&&
        this.AuthService.validar(this.constrasenaConfirm)){

          this.AuthService.nombre = this.nombre;
          this.AuthService.apeliido = this.apellido;
          this.AuthService.correo = this.correo;
          this.AuthService.pass = this.constrasena;
          this.AuthService.passConfirm = this.constrasenaConfirm;

        //una vez valiadodo se debe redirifigri a home
        this.router.navigate(['login']);
      }
      else{
        alert('Ingrese datos validos');
      }
      
      
     }
     


}
