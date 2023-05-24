import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { ReservationDto } from '../../dto/reservation.dto';
import { IReservation } from '../../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing Reservation entities.
 */
export class ReservationService {
  collection: string = 'reservations';

  /**
   * Constructor for ReservationService.
   * @param firestoreService Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new Reservation entity.
   * @param reservation The Reservation object to create.
   * @returns A promise that resolves when the entity is successfully created.
   */
  create(reservation: IReservation) {
    return this.firestoreService.create(this.collection, reservation.toJSON());
  }

  /**
   * Retrieves the collection of Reservation entities.
   * @returns An Observable that emits an array of ReservationDto objects.
   */
  getCollection(): Observable<ReservationDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
          return new ReservationDto(
            item.id,
            item.language,
            item.odiseaDateID,
            item.userID,
            item.userReservations
          );
        });
      })
    );
  }

  /**
   * Removes a Reservation entity.
   * @param reservationDto The ReservationDto object of the entity to remove.
   * @returns A promise that resolves when the entity is successfully removed.
   */
  remove(reservationDto: ReservationDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, reservationDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates a Reservation entity.
   * @param reservationDto The ReservationDto object of the entity to update.
   * @returns A promise that resolves when the entity is successfully updated.
   */
  update(reservationDto: ReservationDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          reservationDto.getReservation().toJSON(),
          reservationDto.getId()
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
   * Retrieves a Reservation entity by its ID.
   * @param id The ID of the Reservation entity to retrieve.
   * @returns A promise that resolves with the ReservationDto object.
   */
  getById(id: string): Promise<ReservationDto> {
    return new Promise<ReservationDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const { language, odiseaDateID, userID, userReservations } = data;

          const reservation = new ReservationDto(
            id,
            language,
            odiseaDateID,
            userID,
            userReservations
          );

          resolve(reservation);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
