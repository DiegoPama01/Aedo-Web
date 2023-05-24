import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { CategoryDto } from '../../dto/category.dto';
import { ICategory } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing categories.
 */
export class CategoryService {
  /**
   * Name of the collection in Firestore.
   */
  collection: string = 'categories';

  /**
   * Constructs an instance of CategoryService.
   * @param firestoreService - Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new category.
   * @param category - Object representing the category to create.
   * @returns A promise that resolves when the creation is completed.
   */
  create(category: ICategory) {
    return this.firestoreService.create(this.collection, category.toJSON());
  }

  /**
   * Gets the collection of categories.
   * @returns An observable that emits an array of CategoryDto objects.
   */
  getCollection(): Observable<CategoryDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
          return new CategoryDto(item.id, item.name);
        });
      })
    );
  }

  /**
   * Removes a category.
   * @param categoryDto - Object representing the category to remove.
   * @returns A promise that resolves when the removal is completed.
   */
  remove(categoryDto: CategoryDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, categoryDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates an existing category.
   * @param categoryDto - Object representing the category to update.
   * @returns A promise that resolves when the update is completed.
   */
  async update(categoryDto: CategoryDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          categoryDto.getCategory().toJSON(),
          categoryDto.getId()
        )
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Gets a category by its ID.
   * @param id - ID of the category to retrieve.
   * @returns A promise that resolves with the corresponding CategoryDto object.
   */
  async getById(id: string): Promise<CategoryDto> {
    return new Promise<CategoryDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const { name } = data;
          const category = new CategoryDto(id, name);
          resolve(category);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
