import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from '../../models/language.model';
import { LanguageDto } from '../../dto/language.dto';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent {
  @Input()
  language!: LanguageDto;
  @Output() languageClicked = new EventEmitter<LanguageDto>();
  iconUrl:any;
  selected:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  languageClick(){
    this.selected = !this.selected
    this.languageClicked.emit(this.language) 
  }

  getName(language:Language){
    return language.item.split(" ")[2]
  }
}
