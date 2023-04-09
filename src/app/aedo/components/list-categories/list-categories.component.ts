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

  public uploadImage(event: any): void {}

  onFileSelected($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.categoryIcon = file.name;
    this.imagesService.uploadImage(file.name, file);
  }
}
