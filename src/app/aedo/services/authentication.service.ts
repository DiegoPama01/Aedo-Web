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
} from '@angular/fire/auth';
import { IOdiseo } from '../interfaces/odiseo.interface';
import { FirestoreService } from './firestore.service';
import { OdiseosService } from './models-services/odiseos.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: any;
  constructor(private auth: Auth, private odiseoService: OdiseosService) {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        this.getRol(usuarioFirebase.uid).then((rol) => {
          const userData = {
            uid: usuarioFirebase?.uid,
            email: usuarioFirebase?.email,
            rol: rol,
          };
          this.user = userData;
          console.log(this.user)
        });
      }
      else{
        this.user = null;
        console.log(this.user)
      }
    });
  }

  async getRol(uid: string):Promise<boolean> {
    return await (
      await this.odiseoService.getById(uid)
    ).isAedo;
  }

  getCurrentUser() {
    return this.user;
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
    };
    return odiseo;
  }
}
