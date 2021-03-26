import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioIngresado:any;
  constructor(
    private AuthService:AuthService) {
      this.usuarioIngresado = this.AuthService.usuario;
     }

  ngOnInit(): void {
  }

}
