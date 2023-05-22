import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseaCalendarDto } from '../../dto/odisea-calendar.dto';
import { IOdiseaCalendar } from '../../interfaces/odisea-calendar.interface';

@Injectable({
  providedIn: 'root',
})
export class OdiseaCalendarService {
  collection: string = 'odiseaCalendars';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseaCalendar: IOdiseaCalendar) {
    return this.firestoreService.create(
      this.collection,
      odiseaCalendar.toJSON()
    );
  }

  getCollection(): Observable<OdiseaCalendarDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new OdiseaCalendarDto(
            item.id,
            item.calendarType,
            item.dates,
            item.language,
            item.odiseaID
          );
        });
      })
    );
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
    const data = await this.firestoreService.getById<any>(this.collection, id);
    const {
      calendarType,
      dates,
      language,
      odiseaID
    } = data;
  
    const odiseaCalendar = new OdiseaCalendarDto(
      id,
      calendarType,
      dates,
      language,
      odiseaID
    );
  
    return odiseaCalendar;
  }
}
