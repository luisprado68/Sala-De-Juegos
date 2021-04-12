import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/page/home/home.component';
import { LoginComponent } from './ingreso/auth/login/login.component';
import { QuienSoyComponent } from './general/page/quien-soy/quien-soy.component';
import { RegistroComponent } from './ingreso/auth/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'quiensoy',
    component:QuienSoyComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
