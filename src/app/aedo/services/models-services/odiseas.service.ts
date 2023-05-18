import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { OdiseaDto } from '../../dto/odisea.dto';

@Injectable({
  providedIn: 'root',
})
export class OdiseaService {
  collection: string = 'odiseas';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseaDto: OdiseaDto) {
    return this.firestoreService.create(
      this.collection,
      odiseaDto.getOdisea()
    );
  }

  getCollection(): Observable<OdiseaDto[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      OdiseaDto[]
    >;
  }

  remove(odiseaDto: OdiseaDto) {
    return this.firestoreService.remove(this.collection, odiseaDto.getId());
  }

  async update(odiseaDto: OdiseaDto) {
    this.firestoreService.update(
      this.collection,
      odiseaDto.getOdisea(),
      odiseaDto.getId()
    );
  }

  async getById(id: string): Promise<OdiseaDto> {
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as OdiseaDto;
  }
}
