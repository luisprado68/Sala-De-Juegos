import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Mensaje } from '../../clases/mensaje';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  //mensaje:Mensaje = new Mensaje();

  constructor(
    private router:Router,
    private AuthService:AuthService,
    private MensajesService:MensajesService) { }

  
  /*EnviarMensaje(){
    //con el thern lo que hacemos es escuchar 
    this.MensajesService.create(this.mensaje).then(()=>{
      console.log("Mensaje Enviado");
    })
  }*/

}
