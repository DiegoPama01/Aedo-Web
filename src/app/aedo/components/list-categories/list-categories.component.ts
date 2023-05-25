import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/models-services/category.service';
import { ImagesService } from '../../services/models-services/images.service';
import { CategoryDto } from '../../dto/category.dto';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css'],
})
export class ListCategoriesComponent {
  closeResult: string = '';
  categoryIcon: any;
  categoryName: string = '';
  categoryToCreate: CategoryDto = new CategoryDto('', '');
  categoryCreated = false;

  constructor(
    private categoryService: CategoryService,
    private imagesService: ImagesService
  ) {}

  private listCategories: Observable<CategoryDto[]> = this.categoryService.getCollection();

  public getListCategories(): Observable<CategoryDto[]> {
    return this.listCategories;
  }

  setFile(event: any) {
    console.log('Llamando a método setFile');
    this.categoryIcon = event.target.files[0];
  }

  createCategory() {
    if (!this.categoryName || !this.categoryIcon) {
      return; // Si el nombre o el icono están vacíos, no se crea la categoría
    }

    this.categoryToCreate.setName(this.categoryName);
    this.categoryService
      .create(this.categoryToCreate.getCategory())
      .then((res) => {
        console.log('Res: ', res);
        return res.id;
      })
      .then((id) => {
        console.log('El ID creado es: ', id);
        this.imagesService.uploadIcon(this.categoryToCreate.getName(), id, this.categoryIcon);
      })
      .then(() => {
        this.categoryCreated = true;
        this.categoryName = '';
        this.categoryIcon = null;
        setTimeout(() => {
          this.refreshCategories(); // Actualizar la lista de categorías después de un retraso
        }, 2000);
      });
  }

  private refreshCategories(): void {
    this.listCategories = this.categoryService.getCollection();
  }
}
