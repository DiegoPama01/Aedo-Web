import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { LanguageDto } from '../../dto/language.dto';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  collection: string = 'languages';

  constructor(private firestoreService: FirestoreService) {}

  create(languageDto: LanguageDto) {
    return this.firestoreService.create(
      this.collection,
      languageDto.getLanguage()
    );
  }

  getCollection(): Observable<LanguageDto[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      LanguageDto[]
    >;
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
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as LanguageDto;
  }
}
