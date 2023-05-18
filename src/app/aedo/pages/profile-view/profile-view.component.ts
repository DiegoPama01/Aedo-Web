import { Component } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { MatDialog } from '@angular/material/dialog';
import { ResetEmailDialogComponent } from '../../components/reset-email-dialog/reset-email-dialog.component';
import { ResetPasswordDialogComponent } from '../../components/reset-password-dialog/reset-password-dialog.component';
import { OdiseoDto } from '../../dto/odiseo.dto';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent {
  modifyInputs: boolean = true;
  odiseo?: OdiseoDto;
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private odiseoService: OdiseoService,
    private matDialog: MatDialog
  ) {
    this.userForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', Validators.pattern('[679]{1}[0-9]{8}')),
      birthday: new FormControl(new Date(2005, 0, 0), [Validators.required]),
    });

    onAuthStateChanged(authService.getAuth(), (usuarioFirebase) => {
      if (usuarioFirebase) {
        this.odiseoService.getById(usuarioFirebase.uid).then((odiseo) => {
          this.odiseo = odiseo;
          this.userForm.setValue({
            name: this.odiseo.getName(),
            phoneNumber: this.odiseo.getPhoneNumber(),
            birthday: new Date(this.odiseo.getBirthDate().toDate()),
          });
        });
      }
    });
  }

  activateInputs() {
    this.modifyInputs = false;
  }

  submit() {
    if (this.userForm.valid) {
      this.modifyInputs = true;
      this.odiseo!.setName(this.userForm.value.name!);
      this.odiseo!.setPhoneNumber(this.userForm.value.phoneNumber!);
      this.odiseo!.setBirthDate(this.userForm.value.birthday!);
      this.odiseoService.update(this.odiseo!);
    }
  }

  changePassword() {
    this.authService.updatePassword();
    this.matDialog.open(ResetPasswordDialogComponent);
  }

  changeEmail() {
    this.matDialog.open(ResetEmailDialogComponent);
  }
}
