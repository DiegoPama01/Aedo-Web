import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { ReservationDto } from '../../dto/reservation.dto';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  collection: string = 'reservations';

  constructor(private firestoreService: FirestoreService) {}

  create(reservationDto: ReservationDto) {
    return this.firestoreService.create(
      this.collection,
      reservationDto.getReservation()
    );
  }

  getCollection(): Observable<ReservationDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new ReservationDto(
            item.id,
            item.language,
            item.odiseaDateID,
            item.userID
          );
        });
      })
    );
  }

  remove(reservationDto: ReservationDto) {
    return this.firestoreService.remove(this.collection, reservationDto.getId());
  }

  async update(reservationDto: ReservationDto) {
    this.firestoreService.update(
      this.collection,
      reservationDto.getReservation(),
      reservationDto.getId()
    );
  }

  async getById(id: string): Promise<ReservationDto> {
    const data = await this.firestoreService.getById<any>(this.collection, id);
    const {
      language,
      odiseaDateID,
      userID
    } = data;
  
    const reservation = new ReservationDto(
      id,
      language,
      odiseaDateID,
      userID
    );
  
    return reservation;
  }
}
