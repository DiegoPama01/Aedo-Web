import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservation } from '../../interfaces/reservation.interface';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  collection:string = "reservations"

  constructor(private firestoreService:FirestoreService) { }

  create(reservation: IReservation){
    return this.firestoreService.create(this.collection,reservation)
  }

  getCollection():Observable<IReservation[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IReservation[]>
  }

  remove(reservation: IReservation){
    return this.firestoreService.remove(this.collection,reservation.id)
  }

  async update(reservation: IReservation){
    this.firestoreService.update(this.collection,reservation, reservation.id)
  }

  async getById(id:string): Promise<IReservation>{
    return await this.firestoreService.getById(this.collection,id) as IReservation
  }
}
