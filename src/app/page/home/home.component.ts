import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(
    private router:Router,
    private AuthService:AuthService) { }

  Registro(){

    this.AuthService.usuario = 'Luis';
    this.router.navigate(['registro']);
  }

}
