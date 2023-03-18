import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, sendEmailVerification } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }
 
  getCurrentUser(){
    return this.auth.currentUser!
  }

  async register({email, password}:any){
    await createUserWithEmailAndPassword(this.auth, email,password).then(
      async () => await sendEmailVerification(this.auth.currentUser!)
    )
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth,new GoogleAuthProvider());
  }

  loginWithFacebook(){
    return signInWithPopup(this.auth,new FacebookAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }
}
