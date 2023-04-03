import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { ILanguage } from '../../interfaces/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  collection: string = 'languages';

  constructor(private firestoreService: FirestoreService) {}

  create(language: ILanguage) {
    return this.firestoreService.set(this.collection, language);
  }

  getCollection(): Observable<ILanguage[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      ILanguage[]
    >;
  }

  remove(language: ILanguage) {
    return this.firestoreService.remove(this.collection, language.id);
  }

  async update(language: ILanguage) {
    this.firestoreService.update(this.collection, language, language.id);
  }

  //TODO - NO FUNCIONA BIEN ESTE MÉTODO
  async getById(id: string): Promise<ILanguage> {
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as ILanguage;
  }
}
