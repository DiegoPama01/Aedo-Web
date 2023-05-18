import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { CategoryDto } from '../../dto/category.dto';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/models-services/category.service';
import { Language } from '../../models/language.model';
import { LanguagesService } from '../../services/models-services/languages.service';

@Component({
  selector: 'app-odisea-form',
  templateUrl: './odisea-form.component.html',
  styleUrls: ['./odisea-form.component.css']
})
export class OdiseaFormComponent {

  categoryList: CategoryDto[] = [];

  languageList: Language[]=[];

  constructor(private formBuilder: FormBuilder,private categoryService: CategoryService, private languageService:LanguagesService){
    
  }

  odiseaForm = this.formBuilder.group({
    name:[""],
    description:[""],
    capacity:[""],
    location:[""],
    tags:[""],
    images:[""],
    price:[""],
    languages:[""]
  }
  )

  submit(){
    console.log(this.odiseaForm.value)
  }

  private listCategories: Observable<CategoryDto[]> =
    this.categoryService.getCollection();

    private listLanguages: Observable<Language[]> =
    this.languageService.getCollection();

  public getCategoryList(): Observable<CategoryDto[]> {
    return this.listCategories;
  }

  public getLanguageList(): Observable<Language[]> {
    return this.listLanguages;
  }

  categorySelected(category:any){
    if(this.categoryList.includes(category)){
      this.categoryList.splice(this.categoryList.indexOf(category),1)
    }else{
      this.categoryList.push(category)
    }
  }
}
