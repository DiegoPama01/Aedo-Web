import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseoDto } from '../../dto/odiseo.dto';
import { IOdiseo } from '../../interfaces/odiseo.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing Odiseo entities.
 */
export class OdiseoService {
  collection: string = 'odiseos';

  /**
   * Constructor for OdiseoService.
   * @param firestoreService Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new Odiseo entity.
   * @param odiseo The Odiseo object to create.
   * @returns A promise that resolves when the entity is successfully created.
   */
  create(odiseo: IOdiseo) {
    return this.firestoreService.create(this.collection, odiseo.toJSON());
  }

  /**
   * Retrieves the collection of Odiseo entities.
   * @returns An Observable that emits an array of OdiseoDto objects.
   */
  getCollection(): Observable<OdiseoDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
          return new OdiseoDto(
            item.id,
            item.accountNumber,
            item.avatar,
            item.birthDate,
            item.email,
            item.isAdmin,
            item.isAedo,
            item.isEducative,
            item.name,
            item.phoneNumber,
            item.userName
          );
        });
      })
    );
  }

  /**
   * Retrieves the collection of Odiseo entities with admin privilege.
   * @returns An Observable that emits an array of OdiseoDto objects.
   */
  getAdmin(): Observable<OdiseoDto[]> {
    return this.firestoreService
      .getCollection(this.collection)
      .pipe(
        map((data: any[]) => data.filter((item) => item.isAdmin === true))
      ) as Observable<OdiseoDto[]>;
  }

  /**
   * Removes an Odiseo entity.
   * @param odiseoDto The OdiseoDto object of the entity to remove.
   * @returns A promise that resolves when the entity is successfully removed.
   */
  remove(odiseoDto: OdiseoDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, odiseoDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates an Odiseo entity.
   * @param odiseoDto The OdiseoDto object of the entity to update.
   * @returns A promise that resolves when the entity is successfully updated.
   */
  update(odiseoDto: OdiseoDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          odiseoDto.getOdiseo().toJSON(),
          odiseoDto.getId()
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
   * Retrieves an Odiseo entity by its ID.
   * @param id The ID of the Odiseo entity to retrieve.
   * @returns A promise that resolves with the OdiseoDto object.
   */
  getById(id: string): Promise<OdiseoDto> {
    return new Promise<OdiseoDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const {
            accountNumber,
            avatar,
            birthDate,
            email,
            isAdmin,
            isAedo,
            isEducative,
            name,
            phoneNumber,
            userName,
          } = data;

          const odiseo = new OdiseoDto(
            id,
            accountNumber,
            avatar,
            birthDate,
            email,
            isAdmin,
            isAedo,
            isEducative,
            name,
            phoneNumber,
            userName
          );

          resolve(odiseo);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
