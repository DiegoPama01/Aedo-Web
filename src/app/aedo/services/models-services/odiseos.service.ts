import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { query, where } from '@firebase/firestore';
import { map, Observable } from 'rxjs';
import { IOdiseo } from '../../interfaces/odiseo.interface';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class OdiseosService {

  collection:string = "odiseos"

  constructor(private firestoreService:FirestoreService) { }

  create(odiseo: IOdiseo){
    return this.firestoreService.set(this.collection,odiseo)
  }

  getCollection():Observable<IOdiseo[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IOdiseo[]>
  }

  getAdmin():Observable<IOdiseo[]>{ 
    return this.firestoreService.getCollection(this.collection).pipe(map((data: any[]) => data.filter(item => item.isAdmin === true)))
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
