import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HomePageComponent {

  isExpanded: boolean = true
  
  constructor(
    private matDialog: MatDialog,
    public auth: AuthenticationService
  ) {}

  openLoginDialog() {
    this.matDialog.open(LoginDialogComponent);
  }

  logout() {
    this.auth.logout().catch((error) => {
      console.log("Error logging out: " + error)
    });
  }

  isUserAdmin() {
    if (this.auth.getCurrentUser()) {
      return this.auth.getCurrentUser().getIsAdmin();
    } else {
      return false;
    }
  }

  getUser() {
    return this.auth.getCurrentUser();
  }
}
