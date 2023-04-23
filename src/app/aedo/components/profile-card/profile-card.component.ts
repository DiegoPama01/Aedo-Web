import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { onAuthStateChanged } from '@angular/fire/auth';
import { OdiseosService } from '../../services/models-services/odiseos.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  user: any;
  username: string = '';
  email: string = '';
  constructor(
    private authService: AuthenticationService,
    private odiseoService: OdiseosService
  ) {
    onAuthStateChanged(authService.getAuth(), (user) => {
      if (user) {
        this.odiseoService.getById(user.uid).then((odiseo) => {
          this.username = odiseo.userName;
          this.email = odiseo.email;
        });
      }
    });
  }
}
