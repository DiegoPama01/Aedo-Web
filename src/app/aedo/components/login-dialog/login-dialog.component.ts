import { AuthenticationService } from 'src/app/aedo/services/authentication.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Language } from '../../models/language.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { OdiseoDto } from '../../dto/odiseo.dto';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  visible: boolean = false;
  language?: Language;
  hide = true;
  errorVisible = false;

  constructor(
    private authenticationService: AuthenticationService,
    private odiseoService: OdiseoService,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private matDialog: MatDialog
  ) {}

  toggle() {
    this.visible = !this.visible;
  }

  logInWithEmail(email: string, password: string) {
    this.authenticationService
      .login({ email, password })
      .then((response) => {
        this.dialogRef.close();
      })
      .catch((error) => {
        console.log(error.Name);
        this.errorVisible = true;
      });
  }

  logInWithGoogle() {
    this.authenticationService
      .loginWithGoogle()
      .then((response) => {
        this.dialogRef.close();
        this.odiseoService
          .getById(this.authenticationService.getCurrentUser().uid)
          .then((value) => {
            if (value.getEmail() == undefined) {
              let auxOdiseo = this.authenticationService.userToOdiseo(
                this.authenticationService.getCurrentUser()
              );
              let odiseoDto = new OdiseoDto(
                this.authenticationService.getCurrentUser().uid,
                auxOdiseo.accountNumber,
                auxOdiseo.avatar,
                auxOdiseo.birthDate,
                auxOdiseo.email,
                auxOdiseo.isAdmin,
                auxOdiseo.isAedo,
                auxOdiseo.isEducative,
                auxOdiseo.name,
                auxOdiseo.phoneNumber,
                auxOdiseo.userName
              );
              this.odiseoService.create(odiseoDto.getOdiseo());
            }
          })
          .catch((err) => console.log('Error'));
      })
      .catch((error) => {
        console.log(error.Name);
      });
  }

  logInWithFacebook() {
    this.authenticationService
      .loginWithFacebook()
      .then((response) => {
        this.dialogRef.close();
      })
      .catch((error) => {
        console.log(error.Name);
      });
  }

  logOut() {
    this.authenticationService
      .logout()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.Name);
      });
  }

  openRegisterDialog() {
    this.matDialog.open(RegisterDialogComponent, { width: '350px' });
  }
}
