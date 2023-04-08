import { Injectable } from '@angular/core';
import { ICategory } from '../../interfaces/category.interface';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { CategoryDto } from '../../dto/category.dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  collection: string = 'categories';

  constructor(private firestoreService: FirestoreService) {}

  create(categoryDto: CategoryDto) {
    return this.firestoreService.create(
      this.collection,
      categoryDto.getCategory()
    );
  }

  getCollection(): Observable<CategoryDto[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      CategoryDto[]
    >;
  }

  remove(categoryDto: CategoryDto) {
    return this.firestoreService.remove(this.collection, categoryDto.getId());
  }

  async update(categoryDto: CategoryDto) {
    this.firestoreService.update(
      this.collection,
      categoryDto.getCategory(),
      categoryDto.getId()
    );
  }

  async getById(id: string): Promise<CategoryDto> {
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as CategoryDto;
  }
}
