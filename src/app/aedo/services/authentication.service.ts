import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }
 
  getAuthenticatedUser(){
    return this.auth.currentUser
  }

  register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email,password);
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
