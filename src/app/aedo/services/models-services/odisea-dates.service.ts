import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseaDatesDto } from '../../dto/odisea-dates.dto';
import { IOdiseaDates } from '../../interfaces/odisea-dates.interface';

@Injectable({
  providedIn: 'root',
})
export class OdiseaDatesService {
  collection: string = 'odiseaDates';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseaDates: IOdiseaDates) {
    return this.firestoreService.create(
      this.collection,
      odiseaDates.toJSON()
    );
  }

  getCollection(): Observable<OdiseaDatesDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new OdiseaDatesDto(
            item.id,
            item.date,
            item.language,
            item.maxCapacity,
            item.numReservations,
            item.odiseaCalendarID,
            item.odiseaID
          );
        });
      })
    );
  }

  remove(odiseaDatesDto: OdiseaDatesDto) {
    return this.firestoreService.remove(this.collection, odiseaDatesDto.getId());
  }

  async update(odiseaDatesDto: OdiseaDatesDto) {
    this.firestoreService.update(
      this.collection,
      odiseaDatesDto.getOdiseaDate().toJSON(),
      odiseaDatesDto.getId()
    );
  }

  async getById(id: string): Promise<OdiseaDatesDto> {
    const data = await this.firestoreService.getById<any>(this.collection, id);
    const {
      date,
      language,
      maxCapacity,
      numReservations,
      odiseaCalendarID,
      odiseaID
    } = data;
  
    const odiseaDates = new OdiseaDatesDto(
      id,
      date,
      language,
      maxCapacity,
      numReservations,
      odiseaCalendarID,
      odiseaID
    );
  
    return odiseaDates;
  }
}
