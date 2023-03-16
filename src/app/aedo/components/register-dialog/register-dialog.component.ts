import { Component } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { AuthenticationService } from '../../services/authentication.service';
import { LanguagesService } from '../../services/models-services/languages.service';
import { OdiseosService } from '../../services/models-services/odiseos.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent {
  formGroup: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      name: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      'confirm-password': new FormControl('', [Validators.required, this.passwordMatchValidator]),
      birthday: new FormControl(''),
    },
    {
      validators: [this.passwordMatchValidator.bind(this)],
    }
  );

  constructor(private auth: AuthenticationService, private odiseoService: OdiseosService, private langService: LanguagesService) {}

  chipText:string = "";
  hide: boolean = true;

  submit(register: FormGroupDirective) {
    let email = register.form.controls['email'].value as string;
    let name = register.form.controls['name'].value as string;
    let phoneNumber = register.form.controls['phoneNumber'].value as string;
    let userName = register.form.controls['username'].value as string;
    let birthDate = register.form.controls['birthday'].value as Date;
    let password = register.form.controls['password'].value as string;

    if (register.valid) {
      this.auth
        .register({ email: email, password: password }).then(
          value => { 
            this.chipText = "Te hemos mandando un correo. Valida tu cuenta";
            let newUser: IOdiseo = {
              id: this.auth.getCurrentUser()!.uid,
              accountNumber: '',
              email: email,
              isAedo: false,
              name: name,
              phoneNumber: phoneNumber,
              userName: userName,
              birthDate: birthDate,
            };
            this.odiseoService.create(newUser);
        }
        ).catch(error => console.log(error));
    }
  }

  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirm-password');
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
  }
}
