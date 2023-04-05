import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/models-services/category.service';
import { Observable } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';
import { ListLanguagesComponent } from '../list-languages/list-languages.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {

  closeResult: string = '';
  SelectedCategory: ICategory = new Category('');

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  private listCategories: Observable<ICategory[]> =
    this.categoryService.getCollection();

  public getListCategories(): Observable<ICategory[]> {
    return this.listCategories;
  }

  ngOnInit(): void {
    this.listCategories.subscribe((data) => {
      console.log('data', data);
    });
  }

  open(content: any, category: ICategory = new Category('')) {
    if (category.name) {
      this.setSelectedCategory(category);
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        if (result === 'removeCategory') {
          this.removeCategory(category.id);
        }
      }
    );
  }
  setSelectedCategory(category: ICategory) {
    this.SelectedCategory = category;
  }

  public async removeCategory(id: string): Promise<void> {
    await this.categoryService.remove(id);
  }

  getSelectedCategory() {
    return this.SelectedCategory; 
    }
}
