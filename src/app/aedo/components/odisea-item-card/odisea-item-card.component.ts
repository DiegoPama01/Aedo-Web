import { Component,Input,EventEmitter, Output   } from '@angular/core';
import { IOdisea } from '../../interfaces/odisea.interface';
import { OdiseaDto } from '../../dto/odisea.dto';

@Component({
  selector: 'app-odisea-item-card',
  templateUrl: './odisea-item-card.component.html',
  styleUrls: ['./odisea-item-card.component.css']
})
export class OdiseaItemCardComponent {
  @Input() odisea?: OdiseaDto;
  @Input() imageUrl?: string;
  @Input() selected: boolean = false;

  @Output() cardClick: EventEmitter<{ odisea: OdiseaDto, imageUrl: string }> = new EventEmitter();

  constructor(){
    
  }

  onCardClick() {
    this.cardClick.emit({ odisea: this.odisea!, imageUrl: this.imageUrl! });
  }
}
