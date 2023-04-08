import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/models-services/category.service';
import { Observable } from 'rxjs';
import { ICategory } from '../../interfaces/category.interface';
import { ListLanguagesComponent } from '../list-languages/list-languages.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryDto } from '../../dto/category.dto';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent implements OnInit {
  closeResult: string = '';
  SelectedCategory: CategoryDto = new CategoryDto('', new Category(''));

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  private listCategories: Observable<CategoryDto[]> =
    this.categoryService.getCollection();

  public getListCategories(): Observable<CategoryDto[]> {
    return this.listCategories;
  }

  ngOnInit(): void {
    this.listCategories.subscribe((data) => {
      console.log('data', data);
    });
  }

  open(content: any, categoryDto: CategoryDto) {
    if (categoryDto.getCategory().name) {
      this.setSelectedCategory(categoryDto);
    }
    this.modalService
      .open(content, { ariaLabelledBy: 'modal' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        if (result === 'removeCategory') {
          this.removeCategory(categoryDto);
        }
      });
  }
  setSelectedCategory(categoryDto: CategoryDto) {
    this.SelectedCategory = categoryDto;
  }

  public async removeCategory(categoryDto: CategoryDto): Promise<void> {
    await this.categoryService.remove(categoryDto);
  }

  getSelectedCategory() {
    return this.SelectedCategory;
  }
}
