import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { RecordDto } from '../../dto/record.dto';
import { IRecord } from '../../interfaces/record.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing Record entities.
 */
export class RecordService {
  collection: string = 'records';

  /**
   * Constructor for RecordService.
   * @param firestoreService Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new Record entity.
   * @param record The Record object to create.
   * @returns A promise that resolves when the entity is successfully created.
   */
  create(record: IRecord) {
    return this.firestoreService.create(this.collection, record.toJSON());
  }


  /**
   * Retrieves the collection of Record entities.
   * @returns An Observable that emits an array of RecordDto objects.
   */
  getCollection(): Observable<RecordDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
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

  /**
   * Removes a Record entity.
   * @param recordDto The RecordDto object of the entity to remove.
   * @returns A promise that resolves when the entity is successfully removed.
   */
  remove(recordDto: RecordDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, recordDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates a Record entity.
   * @param recordDto The RecordDto object of the entity to update.
   * @returns A promise that resolves when the entity is successfully updated.
   */
  update(recordDto: RecordDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          recordDto.getRecord().toJSON(),
          recordDto.getId()
        )
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Retrieves a Record entity by its ID.
   * @param id The ID of the Record entity to retrieve.
   * @returns A promise that resolves with the RecordDto object.
   */
  getById(id: string): Promise<RecordDto> {
    return new Promise<RecordDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((dataDto) => {
          const { lastModified, userID, data } = dataDto;

          const record = new RecordDto(id, lastModified, userID, data);

          resolve(record);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
