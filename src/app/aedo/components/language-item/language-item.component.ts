import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from '../../models/language.model';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent {
  @Input()
  language!: Language;
  @Output() languageClicked = new EventEmitter<Language>();
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
