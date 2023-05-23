import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseoDto } from '../../dto/odiseo.dto';
import { IOdiseo } from '../../interfaces/odiseo.interface';

@Injectable({
  providedIn: 'root',
})
export class OdiseoService {
  collection: string = 'odiseos';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseo: IOdiseo) {
    return this.firestoreService.create(
      this.collection,
      odiseo.toJSON()
    );
  }

  getCollection(): Observable<OdiseoDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
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
      odiseoDto.getOdiseo().toJSON(),
      odiseoDto.getId()
    );
  }

  async getById(id: string): Promise<OdiseoDto> {
    const data = await this.firestoreService.getById<any>(this.collection,id);

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
      userName
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

    return odiseo;
  }
}
