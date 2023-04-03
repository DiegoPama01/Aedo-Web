import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguage } from '../../interfaces/language.interface';
import { Language } from '../../models/language.model';
import { LanguagesService } from '../../services/models-services/languages.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css'],
})
export class ListLanguagesComponent implements OnInit {
  private listLanguages: Observable<ILanguage[]> =
    this.languagesService.getCollection();

  private selectedLanguage: ILanguage = new Language('', '');
  private newLanguage: ILanguage = new Language('', '');

  @ViewChild('closeNewLanguageModal') closeModal: any;
  newLanguageForm: FormGroup;
  editLanguageForm: FormGroup;

  constructor(private languagesService: LanguagesService) {
    this.newLanguageForm = new FormGroup({
      newLanguageItem: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
    this.editLanguageForm = new FormGroup({
      editLanguageItem: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  get editLanguageItem() {
    return this.editLanguageForm.get('editLanguageItem');
  }

  get newLanguageItem() {
    return this.newLanguageForm.get('newLanguageItem');
  }

  ngOnInit(): void {}

  public getList(): Observable<ILanguage[]> {
    return this.listLanguages;
  }

  public getNewLangugage(): ILanguage {
    return this.newLanguage;
  }

  public async createLanguage(): Promise<void> {
    this.newLanguage.item = this.newLanguageForm.value.newLanguageItem;
    const id = this.newLanguage.item.toUpperCase().substring(0, 3);
    this.newLanguage.id = id;
    await this.languagesService.getById(id).then((res) => {
      console.log('el resultado es: ' + res.id);
      try {
        if (res.item) {
          throw new Error('Language already exists');
        } else {
          this.languagesService.create(this.newLanguage);
          this.closeModal.click();
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  public getSelectedLanguage(): ILanguage {
    return this.selectedLanguage;
  }

  public setSelectedLanguage(language: ILanguage): void {
    this.selectedLanguage = language;
  }

  public removeLanguage(): void {
    this.languagesService.remove(this.selectedLanguage);
    this.selectedLanguage = new Language('', '');
  }

  public editLanguage(): void {
    this.languagesService.remove(this.selectedLanguage);
    this.selectedLanguage.item = this.editLanguageForm.value.editLanguageItem;
    this.selectedLanguage.id = this.selectedLanguage.item
      .toUpperCase()
      .substring(0, 3);
    this.languagesService.create(this.selectedLanguage);
    this.selectedLanguage = new Language('', '');
  }
}
