import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseaDto } from '../../dto/odisea.dto';
import { IOdisea } from '../../interfaces/odisea.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing odyssey entities.
 */
export class OdiseaService {
  collection: string = 'odiseas';

  /**
   * Constructor for OdiseaService.
   * @param firestoreService Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new odyssey entity.
   * @param odisea The odyssey object to create.
   * @returns A promise that resolves when the entity is successfully created.
   */
  create(odisea: IOdisea) {
    return this.firestoreService.create(this.collection, odisea.toJSON());
  }

  /**
   * Retrieves the collection of odyssey entities.
   * @returns An Observable that emits an array of OdiseaDto objects.
   */
  getCollection(): Observable<OdiseaDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
          return new OdiseaDto(
            item.id,
            item.description,
            item.images,
            item.languages,
            item.maxCapacity,
            item.name,
            item.numberVotes,
            item.totalScoreVotes,
            item.uid,
            item.tags,
            item.location,
            item.price
          );
        });
      })
    );
  }

  /**
   * Removes an odyssey entity.
   * @param odiseaDto The OdiseaDto object of the entity to remove.
   * @returns A promise that resolves when the entity is successfully removed.
   */
  remove(odiseaDto: OdiseaDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, odiseaDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates an odyssey entity.
   * @param odiseaDto The OdiseaDto object of the entity to update.
   * @returns A promise that resolves when the entity is successfully updated.
   */
  update(odiseaDto: OdiseaDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          odiseaDto.getOdisea(),
          odiseaDto.getId()
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
   * Retrieves an odyssey entity by its ID.
   * @param id The ID of the entity.
   * @returns A promise that resolves with a corresponding OdiseaDto object for the specified ID.
   */
  getById(id: string): Promise<OdiseaDto> {
    return new Promise<OdiseaDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const {
            description,
            images,
            languages,
            maxCapacity,
            name,
            numberVotes,
            totalScoreVotes,
            uid,
            tags,
            location,
            price,
          } = data;

          const odisea = new OdiseaDto(
            id,
            description,
            images,
            languages,
            maxCapacity,
            name,
            numberVotes,
            totalScoreVotes,
            uid,
            tags,
            location,
            price
          );

          resolve(odisea);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
