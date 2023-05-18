import { Component } from '@angular/core';
import { onAuthStateChanged} from '@angular/fire/auth';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css'],
})
export class UserStatusComponent {
  username: any;
  constructor(authService: AuthenticationService) {
    this.username = authService.getCurrentUser();
    onAuthStateChanged(authService.getAuth(), (usuarioFirebase) => {
      this.username = usuarioFirebase?.displayName
    });
  }
}
