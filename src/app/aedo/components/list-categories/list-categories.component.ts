import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/models-services/category.service';
import { Observable } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';
import { ListLanguagesComponent } from '../list-languages/list-languages.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDto } from '../../dto/category.dto';
import { ImagesService } from '../../services/models-services/images.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  closeResult: string = '';
  SelectedCategory: CategoryDto = new CategoryDto('', '');
  categoryIcon: string = '';
  selectedCategoryIcon: string = '';

  constructor(
    private categoryService: CategoryService,
    private imagesService: ImagesService
  ) {}

  private listCategories: Observable<CategoryDto[]> =
    this.categoryService.getCollection();

  public getListCategories(): Observable<CategoryDto[]> {
    return this.listCategories;
  }

  ngOnInit(): void {}

  getFile(event: any) {
    console.log('llamando a metodo');
    const file = event.target.files[0];
    const fileName = file.name;
    this.imagesService.uploadImage(fileName, file);
  }
}
