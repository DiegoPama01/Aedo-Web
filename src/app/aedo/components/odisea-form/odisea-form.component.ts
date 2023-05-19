import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryDto } from '../../dto/category.dto';
import { LanguageDto } from '../../dto/language.dto';
import { CategoryService } from '../../services/models-services/category.service';
import { LanguageService } from '../../services/models-services/languages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-odisea-form',
  templateUrl: './odisea-form.component.html',
  styleUrls: ['./odisea-form.component.css'],
})
export class OdiseaFormComponent implements OnInit {
  categoryList: CategoryDto[] = [];
  languageList: LanguageDto[] = [];
  odiseaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private languageService: LanguageService
  ) {
    this.odiseaForm = this.formBuilder.group({
      name: [''],
      description: [''],
      capacity: [''],
      location: [''],
      tags: [''],
      images: [''],
      price: [''],
      languages: [''],
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadLanguages();
  }

  submit() {
    console.log(this.odiseaForm.value);
  }

  private loadCategories(): void {
    this.categoryService
      .getCollection()
      .subscribe((categories: CategoryDto[]) => {
        this.categoryList = categories;
      });
  }

  private loadLanguages(): void {
    this.languageService
      .getCollection()
      .subscribe((languages: LanguageDto[]) => {
        this.languageList = languages;
      });
  }

  categorySelected(category: any) {
    const index = this.categoryList.indexOf(category);
    if (index !== -1) {
      this.categoryList.splice(index, 1);
    } else {
      this.categoryList.push(category);
    }
  }

  private listCategories: Observable<CategoryDto[]> =
    this.categoryService.getCollection();

  private listLanguages: Observable<LanguageDto[]> =
    this.languageService.getCollection();

  public getCategoryList(): Observable<CategoryDto[]> {
    return this.listCategories;
  }
  public getLanguageList(): Observable<LanguageDto[]> {
    return this.listLanguages;
  }
}
