import { Injectable } from '@angular/core';
import { ICategory } from '../../interfaces/category.interface';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  collection: string = 'categories';

  constructor(private firestoreService: FirestoreService) {}

  create(category: ICategory) {
    return this.firestoreService.create(this.collection, category);
  }

  getCollection(): Observable<ICategory[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      ICategory[]
    >;
  }

  // remove(category: ICategory) {
  //   return this.firestoreService.remove(this.collection, category.id);
  // }

  // async update(category: ICategory) {
  //   this.firestoreService.update(this.collection, category, category.id);
  // }

  // async getById(id: string): Promise<ICategory> {
  //   return (await this.firestoreService.getById(
  //     this.collection,
  //     id
  //   )) as ICategory;
  // }
}
