import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, sendEmailVerification, User } from '@angular/fire/auth';
import { IOdiseo } from '../interfaces/odiseo.interface';

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
      async () => await sendEmailVerification(this.auth.currentUser!))
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

  userToOdiseo(user:User):IOdiseo{
    let odiseo: IOdiseo = {userName:user.displayName!, id:user.uid, email: user.email!,accountNumber:"",isAedo:false,name:"",phoneNumber:"",birthDate:new Date()}
    return odiseo;
  }
}
