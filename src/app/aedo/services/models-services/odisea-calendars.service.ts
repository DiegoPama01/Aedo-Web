import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { OdiseaCalendarDto } from '../../dto/odisea-calendar.dto';

@Injectable({
  providedIn: 'root',
})
export class OdiseaCalendarService {
  collection: string = 'odiseaCalendars';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseaCalendarDto: OdiseaCalendarDto) {
    return this.firestoreService.create(
      this.collection,
      odiseaCalendarDto.getOdiseaCalendar()
    );
  }

  getCollection(): Observable<OdiseaCalendarDto[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      OdiseaCalendarDto[]
    >;
  }

  remove(odiseaCalendarDto: OdiseaCalendarDto) {
    return this.firestoreService.remove(this.collection, odiseaCalendarDto.getId());
  }

  async update(odiseaCalendarDto: OdiseaCalendarDto) {
    this.firestoreService.update(
      this.collection,
      odiseaCalendarDto.getOdiseaCalendar(),
      odiseaCalendarDto.getId()
    );
  }

  async getById(id: string): Promise<OdiseaCalendarDto> {
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as OdiseaCalendarDto;
  }
}
