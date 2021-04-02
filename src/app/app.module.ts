import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { AuthComponent } from './page/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './page/registro/registro.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    RegistroComponent,
    NavbarComponent,
    QuienSoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    //agregamos los modulos de firebase
    //enn angular el json del enviroment
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
