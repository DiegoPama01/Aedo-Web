import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { onAuthStateChanged } from '@angular/fire/auth';
import { OdiseoService } from '../../services/models-services/odiseos.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  user: any;
  username: string = '';
  email: string = '';
  avatar:string="https://material.angular.io/assets/img/examples/shiba2.jpg";
  constructor(
    private authService: AuthenticationService,
    private odiseoService: OdiseoService,
    private storageService:StorageService
  ) {
    onAuthStateChanged(authService.getAuth(), (user) => {
      if (user) {
        this.odiseoService.getById(user.uid).then((odiseo) => {
          this.username = odiseo.getUserName();
          this.email = odiseo.getEmail();
          storageService.downloadFile("images/avatars/"+odiseo.getAvatar().assetId).then((url) => {
            this.avatar=url
          })
        });
      }
    });
  }
}
