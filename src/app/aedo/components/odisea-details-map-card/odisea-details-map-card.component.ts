import { Component, Input, Output, EventEmitter } from '@angular/core';

import { OdiseaDto } from '../../dto/odisea.dto';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ],
  selector: 'app-odisea-details-map-card',
  templateUrl: './odisea-details-map-card.component.html',
  styleUrls: ['./odisea-details-map-card.component.css']
})
export class OdiseaDetailsMapCardComponent {
  @Input() odisea?: OdiseaDto;
  @Input() imageUrl?: string;
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  onButtonClick() {
    this.buttonClick.emit(this.odisea?.getId());
  }
}
