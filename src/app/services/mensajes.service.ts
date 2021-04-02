import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {  AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private dbpath = '/mensajes';
  mensajesRef:AngularFirestoreCollection<Mensaje>

  constructor(
    private db:AngularFirestore
  ) {
    //estams vinculanndo la bd con el de mensajes
    this.mensajesRef = db.collection(this.dbpath);

    
   }

   getAll():AngularFirestoreCollection<Mensaje>{
      return this.mensajesRef;
   }
   create(mensaje:Mensaje){
    //  console.log(mensaje);
     return this.mensajesRef.add(Object.assign({}, mensaje));
   }
}
