import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguage } from '../../interfaces/language.interface';
import { Language } from '../../models/language.model';
import { LanguagesService } from '../../services/models-services/languages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { langToLang, getLanguageName } from 'language-name-to-language-name';
import ISO6391 from 'iso-639-1';

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

  newLanguageForm: FormGroup;
  editLanguageForm: FormGroup;

  constructor(
    private languagesService: LanguagesService,
    private modalService: NgbModal
  ) {
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

  private languagesCodeName = this.getLanguagesNames();
  private languagesCodes = this.getLanguagesCodes();

  closeResult = '';

  public getLanguagesCodes(): any {
    var languagesCodes: any = [];
    this.listLanguages.subscribe((languages) => {
      languages.forEach((language) => {
        languagesCodes.push(language.id);
      });
    });
    return languagesCodes;
  }

  public getLanguagesNames(): any {
    const languagesCodes: any = [];
    const languagesNames: any = langToLang('es');
    for (const code of Object.keys(languagesNames)) {
      languagesCodes.push({
        code: code,
        name: languagesNames[code].name,
      });
    }
    return languagesCodes;
  }

  public getFilteredNamesNew(): any {
    return this.languagesCodeName.filter((language: any) => {
      return (
        language.name
          .toLowerCase()
          .includes(this.newLanguageForm.value.newLanguageItem.toLowerCase()) &&
        this.languagesCodes.indexOf(language.code.toUpperCase()) === -1
      );
    });
  }

  // public getFilteredNamesEdit(): any {
  //   return this.languagesCodeName.filter((language: any) => {
  //     return (
  //       language.name
  //         .toLowerCase()
  //         .includes(
  //           this.editLanguageForm.value.editLanguageItem.toLowerCase()
  //         ) && language.code !== this.selectedLanguage.id
  //     );
  //   });
  // }

  open(content: any, language: ILanguage = new Language('', '')) {
    if (language.item) {
      this.setSelectedLanguage(language);
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        if (result === 'createLanguage') {
          this.createLanguage();
        } else if (result === 'removeLanguage') {
          this.removeLanguage();
        } else if (result === 'editLanguage') {
          this.editLanguage();
        }
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
    const id = this.newLanguageForm.value.newLanguageItem
      .split(' - ')[0]
      .toUpperCase();
    this.newLanguage.id = id;
    await this.languagesService.getById(id).then((res) => {
      try {
        if (res.item) {
          throw new Error('Language already exists');
        } else {
          this.languagesService.create(this.newLanguage);
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

  public setNewLanguageItem(code: string, name: string): void {
    this.newLanguageForm.setValue({ newLanguageItem: code + ' - ' + name });
  }

  public setEditLanguageItem(code: string, name: string): void {
    this.editLanguageForm.setValue({ editLanguageItem: code + ' - ' + name });
  }

  public removeLanguage(): void {
    this.languagesService.remove(this.selectedLanguage);
    this.selectedLanguage = new Language('', '');
  }

  public editLanguage(): void {
    this.languagesService.remove(this.selectedLanguage);
    this.selectedLanguage.item = this.editLanguageForm.value.editLanguageItem;
    this.selectedLanguage.id = this.editLanguageForm.value.editLanguageItem
      .split(' - ')[0]
      .toUpperCase();
    this.languagesService.create(this.selectedLanguage);
    this.selectedLanguage = new Language('', '');
  }
}
