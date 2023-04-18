import { Component } from '@angular/core';
import { onAuthStateChanged, user } from '@angular/fire/auth';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { AuthenticationService } from '../../services/authentication.service';
import { OdiseosService } from '../../services/models-services/odiseos.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
})
export class ProfileViewComponent {
  modifyInputs: boolean = true;
  odiseo?: IOdiseo;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private odiseoService: OdiseosService
  ) {
    onAuthStateChanged(authService.getAuth(), (usuarioFirebase) => {
      if (usuarioFirebase) {
        this.odiseoService.getById(usuarioFirebase.uid).then((odiseo) => {
          this.odiseo = odiseo;
          console.log(odiseo)
          this.userForm = this.formBuilder.group({
            name: this.odiseo.name,
            username: this.odiseo.userName,
            phoneNumber: this.odiseo.phoneNumber,
            email: this.odiseo.email,
          });
        });
      }
    });
  }

  userForm = this.formBuilder.group({
    name: [''],
    username: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', Validators.pattern("[679]{1}[0-9]{8}")),
    email: [''],
  });

  activarInputs() {
    this.modifyInputs = false
  }

  guardarCambios() {
    this.modifyInputs = true
    this.odiseo!.email=this.userForm.value.email!
    this.odiseo!.name=this.userForm.value.name!
    this.odiseo!.userName=this.userForm.value.username!
    this.odiseo!.phoneNumber=this.userForm.value.phoneNumber!
    this.odiseoService.update(this.odiseo!);
  }

  cambiarContrasena(){
    console.log("aaa")
  }
}
