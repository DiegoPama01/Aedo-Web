import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/aedo/services/authentication.service';
import { FirestoreService } from '../../services/firestore.service';
import { Language } from '../../interfaces/language';

@Component({
  selector: 'app-log-card-component',
  templateUrl: './log-card-component.component.html',
  styleUrls: ['./log-card-component.component.css']
})
export class LogCardComponentComponent {

  constructor(private authenticationService: AuthenticationService, private firestore: FirestoreService){}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  visible: boolean = false;
  
  hide = true;
  toggle() {
    this.visible = !this.visible
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes introducir el correo';
    }

    return this.email.hasError('email') ? 'No es válido' : '';
  }


  logInWithEmail(email:string,password:string){
    this.authenticationService.login({email,password})
    .then(response =>{
      console.log(response)
    })
    .catch(error => {console.log(error.Name)})
  }

  logInWithGoogle(){
    this.authenticationService.loginWithGoogle().then(response =>{
      console.log(response);
    })
    .catch(error => {console.log(error.Name);})
  }

  logInWithFacebook(){
    this.authenticationService.loginWithFacebook().then(response =>{
      console.log(response)
    })
    .catch(error => {console.log(error.Name)})
  }

  logOut(){
    this.authenticationService.logout().then(response =>{
      console.log(response)
    })
    .catch(error => {console.log(error.Name)})
  }

  getUser(){
    return this.authenticationService.getAuthenticatedUser()
  }

  addLang(){
    const lang: Language = {item:"lang"}
    this.firestore.addLanguage(lang)
  }
}
