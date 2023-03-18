import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/aedo/services/authentication.service';
import { Language } from '../../models/language.model';
import { LanguagesService } from '../../services/models-services/languages.service';

import { MatDialog } from '@angular/material/dialog'
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  visible: boolean = false;
  language?: Language;
  hide = true;

  constructor(private authenticationService: AuthenticationService, public dialogRef: MatDialogRef<LoginDialogComponent>, private matDialog:MatDialog){}

  toggle() {
    this.visible = !this.visible
  }

  logInWithEmail(email:string,password:string){
    this.authenticationService.login({email,password})
    .then(response =>{
      this.dialogRef.close(); 
    })
    .catch(error => {console.log(error.Name)})
  }

  logInWithGoogle(){
    this.authenticationService.loginWithGoogle().then(response =>{
      this.dialogRef.close(); 
    })
    .catch(error => {console.log(error.Name);})
  }

  logInWithFacebook(){
    this.authenticationService.loginWithFacebook().then(response =>{
      this.dialogRef.close(); 
    })
    .catch(error => {console.log(error.Name)})
  }

  logOut(){
    this.authenticationService.logout().then(response =>{
      console.log(response)
    })
    .catch(error => {console.log(error.Name)})
  }


  openRegisterDialog(){
    this.matDialog.open(
      RegisterDialogComponent,{width:"350px"})
  } 
}
