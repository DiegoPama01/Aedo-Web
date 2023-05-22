import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/models-services/languages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { langToLang } from 'language-name-to-language-name';
import { LanguageDto } from '../../dto/language.dto';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css'],
})
export class ListLanguagesComponent {
  private listLanguages: Observable<LanguageDto[]> =
    this.languagesService.getCollection();

  private selectedLanguage: LanguageDto = new LanguageDto('', '');
  private newLanguage: LanguageDto = new LanguageDto('', '');

  newLanguageForm: FormGroup;
  editLanguageForm: FormGroup;

  constructor(
    private languagesService: LanguageService,
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
    let languagesCodes: any = [];
    this.listLanguages.subscribe((languages) => {
      languages.forEach((language) => {
        languagesCodes.push(language.getId());
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

  open(content: any, language: LanguageDto = new LanguageDto('', '')) {
    if (language.getItem()) {
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

  public getList(): Observable<LanguageDto[]> {
    return this.listLanguages;
  }

  public getNewLangugage(): LanguageDto {
    return this.newLanguage;
  }

  public async createLanguage(): Promise<void> {
    this.newLanguage.setItem(this.newLanguageForm.value.newLanguageItem);
    const id = this.newLanguageForm.value.newLanguageItem
      .split(' - ')[0]
      .toUpperCase();
    this.newLanguage.setId(id);
    await this.languagesService.getById(id).then((res) => {
      try {
        if (res.getItem()) {
          throw new Error('Language already exists');
        } else {
          this.languagesService.create(this.newLanguage.getLanguage());
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  public getSelectedLanguage(): LanguageDto {
    return this.selectedLanguage;
  }

  public setSelectedLanguage(language: LanguageDto): void {
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
    this.selectedLanguage = new LanguageDto('', '');
  }

  public editLanguage(): void {
    this.languagesService.remove(this.selectedLanguage);
    this.selectedLanguage.setItem(this.editLanguageForm.value.editLanguageItem);
    this.selectedLanguage.setId(
      this.editLanguageForm.value.editLanguageItem.split(' - ')[0].toUpperCase()
    );
    this.languagesService.create(this.selectedLanguage.getLanguage());
    this.selectedLanguage = new LanguageDto('', '');
  }
}
