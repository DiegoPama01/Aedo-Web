import { Component, Input } from '@angular/core';
import { IOdiseo } from '../../interfaces/odiseo.interface';

@Component({
  selector: 'app-odisea-profile-odiseo',
  templateUrl: './odisea-profile-odiseo.component.html',
  styleUrls: ['./odisea-profile-odiseo.component.css']
})
export class OdiseaProfileOdiseoComponent {
  @Input() odiseo?: IOdiseo;

}
