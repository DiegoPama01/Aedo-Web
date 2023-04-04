import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/models-services/category.service';
import { Observable } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';
import { ListLanguagesComponent } from '../list-languages/list-languages.component';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  private listCategories: Observable<ICategory[]> =
    this.categoryService.getCollection();
  ngOnInit(): void {
    this.listCategories.subscribe((data) => {
      console.log('data', data);
    });
  }
}
