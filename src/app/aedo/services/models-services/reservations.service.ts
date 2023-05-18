import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
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
    return this.firestoreService.getCollection(this.collection) as Observable<
      ReservationDto[]
    >;
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
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as ReservationDto;
  }
}
