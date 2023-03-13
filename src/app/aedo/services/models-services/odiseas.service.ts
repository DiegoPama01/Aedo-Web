import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOdisea } from '../../interfaces/odisea.interface';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class OdiseasService {

  collection:string = "odiseas"

  constructor(private firestoreService:FirestoreService) { }

  create(odisea: IOdisea){
    return this.firestoreService.create(this.collection,odisea)
  }

  getCollection():Observable<IOdisea[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IOdisea[]>
  }

  remove(odisea: IOdisea){
    return this.firestoreService.remove(this.collection,odisea.id)
  }

  async update(odisea: IOdisea){
    this.firestoreService.update(this.collection,odisea, odisea.id)
  }

  async getById(id:string): Promise<IOdisea>{
    return await this.firestoreService.getById(this.collection,id) as IOdisea
  }
}
