import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseaCalendarDto } from '../../dto/odisea-calendar.dto';
import { IOdiseaCalendar } from '../../interfaces/odisea-calendar.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing odyssey calendars.
 */
export class OdiseaCalendarService {
  collection: string = 'odiseaCalendars';

  /**
   * Constructor for OdiseaCalendarService.
   * @param firestoreService Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new odyssey calendar.
   * @param odiseaCalendar The odyssey calendar object to create.
   * @returns A promise that resolves when the calendar is successfully created.
   */
  create(odiseaCalendar: IOdiseaCalendar) {
    return this.firestoreService.create(this.collection, odiseaCalendar.toJSON());
  }

  /**
   * Retrieves the collection of odyssey calendars.
   * @returns An Observable that emits an array of OdiseaCalendarDto objects.
   */
  getCollection(): Observable<OdiseaCalendarDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
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

  /**
   * Removes an odyssey calendar.
   * @param odiseaCalendarDto The OdiseaCalendarDto object of the calendar to remove.
   * @returns A promise that resolves when the calendar is successfully removed.
   */
  remove(odiseaCalendarDto: OdiseaCalendarDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, odiseaCalendarDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates an odyssey calendar.
   * @param odiseaCalendarDto The OdiseaCalendarDto object of the calendar to update.
   * @returns A promise that resolves when the calendar is successfully updated.
   */
  update(odiseaCalendarDto: OdiseaCalendarDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          odiseaCalendarDto.getOdiseaCalendar().toJSON(),
          odiseaCalendarDto.getId()
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
   * Retrieves an odyssey calendar by its ID.
   * @param id The ID of the calendar.
   * @returns A promise that resolves with a corresponding OdiseaCalendarDto object for the specified ID.
   */
  getById(id: string): Promise<OdiseaCalendarDto> {
    return new Promise<OdiseaCalendarDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const { calendarType, dates, language, odiseaID } = data;

          const odiseaCalendar = new OdiseaCalendarDto(
            id,
            calendarType,
            dates,
            language,
            odiseaID
          );

          resolve(odiseaCalendar);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
