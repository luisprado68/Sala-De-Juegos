import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-enviar-mail',
  templateUrl: './enviar-mail.component.html',
  styleUrls: ['./enviar-mail.component.css'],
  providers:[AuthService],
})
export class EnviarMailComponent  {

  public usuario$: Observable<any> = this.AuthService.afAuth.user;
  constructor(private AuthService:AuthService) { }

  

  enviarMail(){
    this.AuthService.enviarMailVerificacion();
  }
}
