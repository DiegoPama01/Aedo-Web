import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { OdiseoDto } from '../../dto/odiseo.dto';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent {
  chipText: string = '';
  hide: boolean = true;
  formGroup: FormGroup;
  error: boolean = false;

  constructor(
    private auth: AuthenticationService,
    private odiseoService: OdiseoService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      name: new FormControl(''),
      phoneNumber: new FormControl('', Validators.pattern('[679]{1}[0-9]{8}')),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*["/@$!%*?&])[A-Za-zd"/@$!%*?&]{6,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      birthday: new FormControl(new Date(2005, 0, 0), [Validators.required]),
    });
    this.formGroup
      .get('confirmPassword')!
      .setValidators([Validators.required, this.passwordMatchValidator.bind]);
  }

  submit() {
    let email = this.formGroup.controls['email'].value;
    let name = this.formGroup.controls['name'].value;
    let phoneNumber = this.formGroup.controls['phoneNumber'].value;
    let userName = this.formGroup.controls['username'].value;
    let birthDate = this.formGroup.controls['birthday'].value;
    let password = this.formGroup.controls['password'].value;

    if (this.formGroup.valid) {
      this.error = false;
      this.auth
        .register({ email: email, password: password })
        .then((value) => {
          this.chipText = 'Te hemos mandando un correo. Valida tu cuenta';
          let newUser: OdiseoDto = new OdiseoDto(
            this.auth.getCurrentUser()!.uid,
            '',
            { assetId: 'orange-aedo.png' },
            new Date(birthDate),
            email,
            false,
            false,
            false,
            name == null ? '' : name,
            phoneNumber == null ? '' : phoneNumber,
            userName
          );
          this.odiseoService.create(newUser);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.chipText = 'El correo ya tiene una cuenta asociada';
          }
        });
    }
  }

  passwordMatchValidator(control: FormControl) {
    const password = control.parent?.get('password')!.value;
    const confirmPassword = control.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return { passwordMismatch: false };
  }

  myFilter = (d: Date | null): boolean => {
    const filterDay = new Date();
    filterDay.setFullYear(filterDay.getFullYear() - 16);
    const day = d || new Date();
    // Prevent Saturday and Sunday from being selected.
    return day.getFullYear() < filterDay.getFullYear();
  };
}
