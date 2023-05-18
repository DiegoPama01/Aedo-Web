import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { OdiseaDatesDto } from '../../dto/odisea-dates.dto';

@Injectable({
  providedIn: 'root',
})
export class OdiseaDatesService {
  collection: string = 'odiseaDates';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseaDatesDto: OdiseaDatesDto) {
    return this.firestoreService.create(
      this.collection,
      odiseaDatesDto.getOdiseaDate()
    );
  }

  getCollection(): Observable<OdiseaDatesDto[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      OdiseaDatesDto[]
    >;
  }

  remove(odiseaDatesDto: OdiseaDatesDto) {
    return this.firestoreService.remove(this.collection, odiseaDatesDto.getId());
  }

  async update(odiseaDatesDto: OdiseaDatesDto) {
    this.firestoreService.update(
      this.collection,
      odiseaDatesDto.getOdiseaDate(),
      odiseaDatesDto.getId()
    );
  }

  async getById(id: string): Promise<OdiseaDatesDto> {
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as OdiseaDatesDto;
  }
}
