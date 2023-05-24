import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { LanguageDto } from '../../dto/language.dto';
import { ILanguage } from '../../interfaces/language.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing languages.
 */
export class LanguageService {
  collection: string = 'languages';

  /**
   * Constructs an instance of LanguageService.
   * @param firestoreService - Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new language.
   * @param language - Language object to create.
   * @returns A promise that resolves when the language is successfully created.
   */
  create(language: ILanguage) {
    return this.firestoreService.create(this.collection, language.toJSON());
  }

  /**
   * Retrieves the collection of languages.
   * @returns Observable that emits an array of LanguageDto objects.
   */
  getCollection(): Observable<LanguageDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
          return new LanguageDto(item.id, item.item);
        });
      })
    );
  }

  /**
   * Removes a language.
   * @param languageDto - LanguageDto object of the language to remove.
   * @returns A promise that resolves when the language is successfully removed.
   */
  remove(languageDto: LanguageDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, languageDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates a language.
   * @param languageDto - LanguageDto object of the language to update.
   * @returns A promise that resolves when the language is successfully updated.
   */
  async update(languageDto: LanguageDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          languageDto.getLanguage().toJSON(),
          languageDto.getId()
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
   * Retrieves a language by its ID.
   * @param id - ID of the language.
   * @returns A promise that resolves with a LanguageDto object corresponding to the specified ID.
   */
  async getById(id: string): Promise<LanguageDto> {
    return new Promise<LanguageDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const { item } = data;

          const language = new LanguageDto(id, item);
          resolve(language);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
