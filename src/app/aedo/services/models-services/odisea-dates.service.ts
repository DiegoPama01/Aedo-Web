import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { IOdiseaDates } from '../../interfaces/odisea-dates.interface';

@Injectable({
  providedIn: 'root'
})
export class OdiseaDatesService {

  collection:string = "odiseaDates"

  constructor(private firestoreService:FirestoreService) { }

  create(odiseaDates: IOdiseaDates){
    return this.firestoreService.create(this.collection,odiseaDates)
  }

  getCollection():Observable<IOdiseaDates[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IOdiseaDates[]>
  }

  remove(odiseaDates: IOdiseaDates){
    return this.firestoreService.remove(this.collection,odiseaDates.id)
  }

  async update(odiseaDates: IOdiseaDates){
    this.firestoreService.update(this.collection,odiseaDates, odiseaDates.id)
  }

  async getById(id:string): Promise<IOdiseaDates>{
    return await this.firestoreService.getById(this.collection,id) as IOdiseaDates
  }
}
