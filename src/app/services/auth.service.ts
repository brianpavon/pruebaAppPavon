import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userFirebase : any;

  constructor(private auth:AngularFireAuth) { }

  async register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
    // .then(
    //   e=>{
    //     this.userFirebase = e.user;
    //     this.enviarMailParaVerificar();
    //   }
    // );
  }

  async enviarMailParaVerificar(){
    return this.auth.currentUser.then(
      user=>{
        return user?.sendEmailVerification();
      }
    )
  }

}
