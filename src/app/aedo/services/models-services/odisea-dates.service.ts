import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseaDatesDto } from '../../dto/odisea-dates.dto';
import { IOdiseaDates } from '../../interfaces/odisea-dates.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing odyssey dates.
 */
export class OdiseaDatesService {
  collection: string = 'odiseaDates';

  /**
   * Constructor for OdiseaDatesService.
   * @param firestoreService Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new odyssey date.
   * @param odiseaDates The odyssey date object to create.
   * @returns A promise that resolves when the date is successfully created.
   */
  create(odiseaDates: IOdiseaDates) {
    return this.firestoreService.create(this.collection, odiseaDates.toJSON());
  }

  /**
   * Retrieves the collection of odyssey dates.
   * @returns An Observable that emits an array of OdiseaDatesDto objects.
   */
  getCollection(): Observable<OdiseaDatesDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
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


  getOdiseaDatesByCalendar(odiseaCalendarId: string, date: Date): Observable<OdiseaDatesDto | undefined> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {

        const item = data.find((item) => {
          const itemDate = item.date.toDate();
          itemDate.setHours(0, 0, 0, 0); // Establecer la hora a las 0:00
          date.setHours(0, 0, 0, 0); // Establecer la hora a las 0:00
          return item.odiseaCalendarID === odiseaCalendarId && itemDate.getTime() === date.getTime();
        });
        
        if (item) {
          return new OdiseaDatesDto(
            item.id,
            item.date,
            item.language,
            item.maxCapacity,
            item.numReservations,
            item.odiseaCalendarID,
            item.odiseaID
          );
        }
        return undefined; // Si no se encuentra ningún objeto con el odiseaCalendarId proporcionado
      })
    );
  }
  

  /**
   * Removes an odyssey date.
   * @param odiseaDatesDto The OdiseaDatesDto object of the date to remove.
   * @returns A promise that resolves when the date is successfully removed.
   */
  remove(odiseaDatesDto: OdiseaDatesDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, odiseaDatesDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates an odyssey date.
   * @param odiseaDatesDto The OdiseaDatesDto object of the date to update.
   * @returns A promise that resolves when the date is successfully updated.
   */
  update(odiseaDatesDto: OdiseaDatesDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          odiseaDatesDto.getOdiseaDate().toJSON(),
          odiseaDatesDto.getId()
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
   * Retrieves an odyssey date by its ID.
   * @param id The ID of the date.
   * @returns A promise that resolves with a corresponding OdiseaDatesDto object for the specified ID.
   */
  getById(id: string): Promise<OdiseaDatesDto> {
    return new Promise<OdiseaDatesDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const {
            date,
            language,
            maxCapacity,
            numReservations,
            odiseaCalendarID,
            odiseaID,
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

          resolve(odiseaDates);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
