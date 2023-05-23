import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-odisea-profile',
  templateUrl: './odisea-profile.component.html',
  styleUrls: ['./odisea-profile.component.css'],
})
export class OdiseaProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      const id = params['id'];
      // Haz algo con el valor del parámetro "id" recibido
    });
  }
}
