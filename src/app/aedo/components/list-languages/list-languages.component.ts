import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguage } from '../../interfaces/language.interface';
import { Language } from '../../models/language.model';
import { LanguagesService } from '../../services/models-services/languages.service';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css'],
})
export class ListLanguagesComponent implements OnInit {
  private listLanguages: Observable<ILanguage[]> =
    this.languagesService.getCollection();

  constructor(private languagesService: LanguagesService) {}

  ngOnInit(): void {}

  public getList(): Observable<ILanguage[]> {
    return this.listLanguages;
  }

  removeLanguage(language: ILanguage): void {
    console.log('idioma a borrar', language);
    this.languagesService.remove(language);
  }
}
