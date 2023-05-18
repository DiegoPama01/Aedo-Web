import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseoDto } from '../../dto/odiseo.dto';

@Injectable({
  providedIn: 'root',
})
export class OdiseoService {
  collection: string = 'odiseos';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseoDto: OdiseoDto) {
    return this.firestoreService.create(
      this.collection,
      odiseoDto.getOdiseo()
    );
  }

  getCollection(): Observable<OdiseoDto[]> {
    return this.firestoreService.getCollection(this.collection) as Observable<
      OdiseoDto[]
    >;
  }

  getAdmin(): Observable<OdiseoDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => data.filter(item => item.isAdmin === true))
    ) as Observable<OdiseoDto[]>;
  }

  remove(odiseoDto: OdiseoDto) {
    return this.firestoreService.remove(this.collection, odiseoDto.getId());
  }

  async update(odiseoDto: OdiseoDto) {
    this.firestoreService.update(
      this.collection,
      odiseoDto.getOdiseo(),
      odiseoDto.getId()
    );
  }

  async getById(id: string): Promise<OdiseoDto> {
    return (await this.firestoreService.getById(
      this.collection,
      id
    )) as unknown as OdiseoDto;
  }
}
