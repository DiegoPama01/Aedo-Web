import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecord } from '../../interfaces/record.interface';
import { FirestoreService } from '../firestore.service';

@Injectable({
  providedIn: 'root'
})
export class RecordsApiService {

  collection:string = "records"

  constructor(private firestoreService:FirestoreService) { }

  create(record: IRecord){
    return this.firestoreService.create(this.collection,record)
  }

  getCollection():Observable<IRecord[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IRecord[]>
  }

  remove(record: IRecord){
    return this.firestoreService.remove(this.collection,record.id)
  }

  async update(record: IRecord){
    this.firestoreService.update(this.collection,record, record.id)
  }

  async getById(id:string): Promise<IRecord>{
    return await this.firestoreService.getById(this.collection,id) as IRecord
  }
}
