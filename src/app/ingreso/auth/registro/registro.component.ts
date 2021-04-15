import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/clases/mensaje';
import { AuthService } from '../../../services/auth.service';
import { MensajesService } from '../../../services/mensajes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),

  })
  usuarioIngresado:string;
  nombre:string="";
  apellido:string="";
  correo:string ="";
  constrasena:string ="";             
  constrasenaConfirm:string ="";
  mensaje:Mensaje = new Mensaje();

  

  constructor(
    private AuthService:AuthService,
    private router:Router,
    private MensajesService:MensajesService ) {
      this.usuarioIngresado = this.AuthService.usuario;
      
     }
     Resitrarse(){
       
      // validaciones al ingresar datos
        if(this.AuthService.validarString(this.nombre)&&
        this.AuthService.validarString(this.apellido)&&
        this.AuthService.validarMail(this.correo)&&
        this.AuthService.validar(this.constrasena)&&
        this.AuthService.validar(this.constrasenaConfirm)){
          
          this.mensaje.Nombre =this.nombre;
          this.mensaje.Apellido = this.apellido;
          this.mensaje.Correo = this.correo;
          this.mensaje.Contrasena = this.constrasena;
          this.mensaje.ContrasenaConfirm = this.constrasenaConfirm;
          
          // this.AuthService.apeliido = this.apellido;
          // this.AuthService.correo = this.correo;
          // this.AuthService.pass = this.constrasena;
          // this.AuthService.passConfirm = this.constrasenaConfirm;

          this.MensajesService.create(this.mensaje).then(()=>{
            console.log("Mensaje Enviado");
          })

        //una vez valiadodo se debe redirifigri a home
        this.router.navigate(['login']);
      }
      else{
        alert('Ingrese datos validos');
      }
      
      
     }

     async registrarse(){
       //console.log('Form',this.registerForm.value);
       try{
          const {email,password} = this.registerForm.value;
          const usuario = await this.AuthService.registrar(email,password);
          if(usuario){
            this.router.navigate(['home']);
          }
       }
       catch(error){
         console.log(error);
       }
       
     }
     


}
