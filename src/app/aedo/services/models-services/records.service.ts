import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
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
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new RecordDto(
            item.id,
            item.lastModified,
            item.userID,
            item.data
          );
        });
      })
    );
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
    const dataDto = await this.firestoreService.getById<any>(this.collection, id);
    const {
      lastModified,
      userID,
      data
    } = dataDto;
  
    const records = new RecordDto(
      id,
      lastModified,
      userID,
      data
    );
  
    return records;
  }
}
