import { Component } from '@angular/core';
import { onAuthStateChanged, user } from '@angular/fire/auth';
import { AuthenticationService } from '../../services/authentication.service';
import { OdiseosService } from '../../services/models-services/odiseos.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css'],
})
export class UserStatusComponent {
  username: any;
  constructor(private authService: AuthenticationService, private odiseoService: OdiseosService) {
    this.username = authService.getCurrentUser();
    onAuthStateChanged(authService.getAuth(), (usuarioFirebase) => {
      this.username = usuarioFirebase?.displayName
    });
  }
}
