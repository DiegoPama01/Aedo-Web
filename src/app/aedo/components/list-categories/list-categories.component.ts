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
  categoryIcon: any;
  categoryName: string = '';
  categoryToCreate: CategoryDto = new CategoryDto('', '');
  categoryCreated = false;

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

  setFile(event: any) {
    console.log('llamando a metodo');
    this.categoryIcon = event.target.files[0];
  }

  createCategory() {
    this.categoryToCreate.setName(this.categoryName);
    this.categoryService
      .create(this.categoryToCreate.getCategory())
      .then((res) => {
        console.log('res: ', res);
        return res.id;
      })
      .then((id) => {
        console.log('el id creado es: ', id);
        this.imagesService.uploadIcon(this.categoryToCreate.getName(), id, this.categoryIcon);
      })
      .then(() => {
        this.categoryCreated = true;
      });
  }
}
