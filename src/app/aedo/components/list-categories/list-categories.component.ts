import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/models-services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    const listCategorias = this.categoryService.getCollection();
    listCategorias.subscribe((data) => {
      console.log(data);
    });
  }
}
