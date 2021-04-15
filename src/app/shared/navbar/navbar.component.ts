import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  nombre:string;
  //estaLogueado:boolean = false;
  public user:any;
  //obbetenngo el usuario
  usuario$: Observable<any> = this.AuthService.afAuth.user;

  constructor(
    private AuthService:AuthService,
    private router:Router) { 
    this.nombre = this.AuthService.usuarioLogueado;
  }

  // async ngOnInit() {
  //   console.log('navbar');
  //   this.user  = await this.AuthService.obtenerUsuario();
  //   if(this.user){
  //     this.estaLogueado = true;
  //     console.log('user',this.user);
  //   }
  //   else{
  //     console.log('no usuaerio');
  //   }
  // }
  async cerrarSesion(){
    try{
      await this.AuthService.logout();
      //this.router.navigate(['login']);
    }
    catch(error){
      console.log(error);
    }
    
  }

 

}
