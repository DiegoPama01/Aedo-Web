import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class OdiseosApiService {

  collection:string = "odiseas"

  constructor(private firestoreService:FirestoreService) { }

  create(odiseo: IOdiseo){
    return this.firestoreService.create(this.collection,odiseo)
  }

  getCollection():Observable<IOdiseo[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IOdiseo[]>
  }

  remove(odiseo: IOdiseo){
    return this.firestoreService.remove(this.collection,odiseo.id)
  }

  async update(odiseo: IOdiseo){
    this.firestoreService.update(this.collection,odiseo, odiseo.id)
  }

  async getById(id:string): Promise<IOdiseo>{
    return await this.firestoreService.getById(this.collection,id) as IOdiseo
  }
}
