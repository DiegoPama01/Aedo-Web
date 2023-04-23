import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendEmailVerification,
  User,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail
} from '@angular/fire/auth';
import { IOdiseo } from '../interfaces/odiseo.interface';
import { OdiseosService } from './models-services/odiseos.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: any;
  private userFirebase:any;

  constructor(private auth: Auth, private odiseoService: OdiseosService) {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        this.odiseoService.getById(usuarioFirebase.uid).then((odiseo) => this.user = odiseo)
        this.userFirebase = usuarioFirebase
      }
      else{
        this.user = null;
        this.userFirebase = null;
      }
    });
  }

  getAuth(){
    return this.auth;
  }

  async isAdmin(){
    return this.user.isAdmin
  }

  getCurrentUser() {
    return this.user;
  }

  userIsAdmin(){
    return this.user.isAdmin
  }

  async register({ email, password }: any) {
    await createUserWithEmailAndPassword(this.auth, email, password).then(
      async () => await sendEmailVerification(this.auth.currentUser!)
    );
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  loginWithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  userToOdiseo(user: User): IOdiseo {
    let odiseo: IOdiseo = {
      userName: user.displayName!,
      id: user.uid,
      email: user.email!,
      accountNumber: '',
      isAedo: false,
      name: '',
      phoneNumber: '',
      birthDate: new Date(),
      isAdmin:false,
      avatar:{assetId:"orange-aedo.png"},
      isEducative:false
    };
    return odiseo;
  }

  updatePassword(){
    sendPasswordResetEmail(this.auth, this.user.email).then(() => {
      // Update successful.
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
  }

  updateEmail(newEmail:string){
    updateEmail(this.user,newEmail).then(()=>{
      this.odiseoService.getById(this.user.uid).then((odiseo)=>
      {
        let newOdiseo = {...odiseo, email:newEmail}
        this.odiseoService.update(newOdiseo) 
      })
    })
  }
}
