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
/**
 * Service for managing user authentication.
 */
export class AuthenticationService {
  private user: any;
  private userFirebase: any;

  /**
   * Constructor for AuthenticationService.
   * @param auth Instance of Auth from AngularFireAuth.
   * @param odiseoService Instance of OdiseoService.
   */
  constructor(private auth: Auth, private odiseoService: OdiseoService) {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        this.odiseoService
          .getById(firebaseUser.uid)
          .then((odiseo) => {
            this.user = odiseo;
          })
          .catch((error) => {
            console.error('Error retrieving user data:', error);
          });
        this.userFirebase = firebaseUser;
      } else {
        this.user = null;
        this.userFirebase = null;
      }
    });
  }

  /**
   * Returns the Auth instance.
   * @returns The Auth instance.
   */
  getAuth() {
    return this.auth;
  }

  /**
   * Returns the UID of the currently authenticated user.
   * @returns The UID of the user.
   */
  getUid() {
    return this.userFirebase.uid;
  }

  /**
   * Checks if the current user is an admin.
   * @returns A promise that resolves with a boolean indicating if the user is an admin.
   */
  async isAdmin() {
    return this.user.isAdmin;
  }

  /**
   * Returns the current user.
   * @returns The current user.
   */
  getCurrentUser() {
    return this.user;
  }

  /**
   * Checks if the current user is an admin.
   * @returns A boolean indicating if the user is an admin.
   */
  userIsAdmin() {
    return this.user.isAdmin;
  }

  /**
   * Registers a new user with the provided email and password.
   * @param email The email for the new user.
   * @param password The password for the new user.
   * @returns A promise that resolves when the user is successfully registered.
   */
  async register({ email, password }: any) {
    await createUserWithEmailAndPassword(this.auth, email, password).then(
      async () => await sendEmailVerification(this.auth.currentUser!)
    );
  }

  /**
   * Logs in a user with the provided email and password.
   * @param email The email of the user.
   * @param password The password of the user.
   * @returns A promise that resolves when the user is successfully logged in.
   */
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Logs in a user using Google authentication.
   * @returns A promise that resolves when the user is successfully logged in.
   */
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  /**
   * Logs in a user using Facebook authentication.
   * @returns A promise that resolves when the user is successfully logged in.
   */
  loginWithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }

  /**
   * Logs out the current user.
   * @returns A promise that resolves when the user is successfully logged out.
   */
  logout() {
    return signOut(this.auth);
  }

  /**
   * Converts a User object to an IOdiseo object.
   * @param user The User object to convert.
   * @returns The converted IOdiseo object.
   */
  userToOdiseo(user: User): IOdiseo {
    let odiseo = new Odiseo(
      '',
      user.email!,
      false,
      '',
      '',
      user.displayName!,
      new Date(),
      { assetId: 'orange-aedo.png' }
    );
    return odiseo;
  }

  /**
   * Sends a password reset email to the user's email address.
   */
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

  /**
   * Updates the email address of the current user.
   * @param newEmail The new email address.
   */
  updateEmail(newEmail: string) {
    updateEmail(this.user, newEmail)
      .then(() => {
        this.odiseoService.getById(this.user.uid)
          .then((odiseo) => {
            odiseo.setEmail(newEmail);
            this.odiseoService.update(odiseo).catch((error)=>{
              console.error('Error updating user data:', error);
            });
          })
          .catch((error) => {
            console.error('Error retrieving user data:', error);
          });
      })
      .catch((error) => {
        console.error('Error updating email:', error);
      });
  }
}
