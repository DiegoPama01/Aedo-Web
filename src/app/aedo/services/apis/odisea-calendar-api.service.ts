import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { IOdiseaCalendar } from '../../interfaces/odisea-calendar.interface';

@Injectable({
  providedIn: 'root'
})
export class OdiseaCalendarsApiService {

  collection:string = "odiseaCalendars"

  constructor(private firestoreService:FirestoreService) { }

  create(odiseaCalendar: IOdiseaCalendar){
    return this.firestoreService.create(this.collection,odiseaCalendar)
  }

  getCollection():Observable<IOdiseaCalendar[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IOdiseaCalendar[]>
  }

  remove(odiseaCalendar: IOdiseaCalendar){
    return this.firestoreService.remove(this.collection,odiseaCalendar.id)
  }

  async update(odiseaCalendar: IOdiseaCalendar){
    this.firestoreService.update(this.collection,odiseaCalendar, odiseaCalendar.id)
  }

  async getById(id:string): Promise<IOdiseaCalendar>{
    return await this.firestoreService.getById(this.collection,id) as IOdiseaCalendar
  }
}
