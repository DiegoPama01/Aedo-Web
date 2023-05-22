import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { LanguageDto } from '../../dto/language.dto';
import { ILanguage } from '../../interfaces/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  collection: string = 'languages';

  constructor(private firestoreService: FirestoreService) {}

  create(language: ILanguage) {
    return this.firestoreService.create(
      this.collection,
      language.toJSON()
    );
  }

  getCollection(): Observable<LanguageDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new LanguageDto(
            item.id,
            item.item
          );
        });
      })
    );
  }

  remove(languageDto: LanguageDto) {
    return this.firestoreService.remove(this.collection, languageDto.getId());
  }

  async update(languageDto: LanguageDto) {
    this.firestoreService.update(
      this.collection,
      languageDto.getLanguage(),
      languageDto.getId()
    );
  }

  async getById(id: string): Promise<LanguageDto> {
    const data = await this.firestoreService.getById<any>(this.collection, id);
    const {
      item
    } = data;
  
    const language = new LanguageDto(
      id,
      item
    );
  
    return language;
  }
}
