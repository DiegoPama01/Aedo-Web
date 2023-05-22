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
  updateEmail,
} from '@angular/fire/auth';
import { IOdiseo } from '../interfaces/odiseo.interface';
import { OdiseoService } from './models-services/odiseos.service';
import { Odiseo } from '../models/odiseo.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: any;
  private userFirebase: any;

  constructor(private auth: Auth, private odiseoService: OdiseoService) {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        this.odiseoService
          .getById(usuarioFirebase.uid)
          .then((odiseo) => (this.user = odiseo));
        this.userFirebase = usuarioFirebase;
      } else {
        this.user = null;
        this.userFirebase = null;
      }
    });
  }

  getAuth() {
    return this.auth;
  }

  getUid() {
    return this.userFirebase.uid;
  }

  async isAdmin() {
    return this.user.isAdmin;
  }

  getCurrentUser() {
    return this.user;
  }

  userIsAdmin() {
    return this.user.isAdmin;
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
    let odiseo = new Odiseo("",user.email!,false,"","",user.displayName!,new Date(),{ assetId: 'orange-aedo.png' });
    return odiseo;
  }

  updatePassword() {
    sendPasswordResetEmail(this.auth, this.user.email)
      .then(() => {
        // Update successful.
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  updateEmail(newEmail: string) {
    updateEmail(this.user, newEmail).then(() => {
      this.odiseoService.getById(this.user.uid).then((odiseo) => {
        odiseo.setEmail(newEmail);
        this.odiseoService.update(odiseo);
      });
    });
  }
}
