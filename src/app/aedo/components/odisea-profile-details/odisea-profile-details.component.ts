import { Component, Input, OnInit  } from '@angular/core';
import { IOdisea } from '../../interfaces/odisea.interface';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-odisea-profile-details',
  templateUrl: './odisea-profile-details.component.html',
  styleUrls: ['./odisea-profile-details.component.css']
})
export class OdiseaProfileDetailsComponent implements OnInit {
  id?: string;
  @Input() odisea?: IOdisea;
  @Input() imageUrl?: string[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  startReservation(){
    this.router.navigate(['/home/odisea-profile', this.id, 'reservate']);
  }
}
