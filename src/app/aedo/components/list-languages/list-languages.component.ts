import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILanguage } from '../../interfaces/language.interface';
import { Language } from '../../models/language.model';
import { LanguagesService } from '../../services/models-services/languages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  closeResult = '';

  //TODO - no abre el modal que toca
  open(content: any, name: string, language: ILanguage = new Language('', '')) {
    console.log('llamado con el nombre', name);
    if (language.item) {
      this.setSelectedLanguage(language);
      console.log(ISO6391.getName(language.item.toLowerCase()));
    }
    this.modalService.open(content, { ariaLabelledBy: name }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
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
    const id = this.newLanguage.item.toUpperCase().substring(0, 3);
    this.newLanguage.id = id;
    await this.languagesService.getById(id).then((res) => {
      console.log('el resultado es: ' + res.id);
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
