import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { CategoryDto } from '../../dto/category.dto';
import { ICategory } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  collection: string = 'categories';

  constructor(private firestoreService: FirestoreService) {}

  create(category: ICategory) {
    return this.firestoreService.create(
      this.collection,
      category.toJSON()
    );
  }

  getCollection(): Observable<CategoryDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new CategoryDto(
            item.id,
            item.name
          );
        });
      })
    );
  }

  remove(categoryDto: CategoryDto) {
    return this.firestoreService.remove(this.collection, categoryDto.getId());
  }

  async update(categoryDto: CategoryDto) {
    this.firestoreService.update(
      this.collection,
      categoryDto.getCategory().toJSON(),
      categoryDto.getId()
    );
  }

  async getById(id: string): Promise<CategoryDto> {
    const data = await this.firestoreService.getById<any>(this.collection, id);
    const {
      name
    } = data;
  
    const category = new CategoryDto(
      id,
      name
    );

    return category;
  }
}
