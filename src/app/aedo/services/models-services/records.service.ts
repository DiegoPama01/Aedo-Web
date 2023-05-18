import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';
import { RecordDto } from '../../dto/record.dto';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  collection: string = 'records';

  constructor(private firestoreService: FirestoreService) {}

  create(recordDto: RecordDto) {
    return this.firestoreService.create(
      this.collection,
      recordDto.getRecord()
    );
  }

  getCollection(): Observable<RecordDto[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      RecordDto[]
    >;
  }

  remove(recordDto: RecordDto) {
    return this.firestoreService.remove(this.collection, recordDto.getId());
  }

  async update(recordDto: RecordDto) {
    this.firestoreService.update(
      this.collection,
      recordDto.getRecord(),
      recordDto.getId()
    );
  }

  async getById(id: string): Promise<RecordDto> {
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as RecordDto;
  }
}
