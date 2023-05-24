import { Component, Input } from '@angular/core';
import { IOdisea } from '../../interfaces/odisea.interface';

@Component({
  selector: 'app-odisea-profile-details',
  templateUrl: './odisea-profile-details.component.html',
  styleUrls: ['./odisea-profile-details.component.css']
})
export class OdiseaProfileDetailsComponent {

  @Input() odisea?: IOdisea;
  @Input() imageUrl?: string[];
}
