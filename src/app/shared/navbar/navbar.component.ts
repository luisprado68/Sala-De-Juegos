import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  nombre:string;
  constructor(
    private AuthService:AuthService
  ) { 
    this.nombre = this.AuthService.usuarioLogueado;
  }

 

}
