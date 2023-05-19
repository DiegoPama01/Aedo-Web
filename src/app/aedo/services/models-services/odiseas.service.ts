import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { OdiseaDto } from '../../dto/odisea.dto';

@Injectable({
  providedIn: 'root',
})
export class OdiseaService {
  collection: string = 'odiseas';

  constructor(private firestoreService: FirestoreService) {}

  create(odiseaDto: OdiseaDto) {
    return this.firestoreService.create(
      this.collection,
      odiseaDto.getOdisea()
    );
  }

  getCollection(): Observable<OdiseaDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new OdiseaDto(
            item.id,
            item.description,
            item.image,
            item.languages,
            item.maxCapacity,
            item.name,
            item.numberVotes,
            item.totalScoreVotes,
            item.uid,
            item.tags
          );
        });
      })
    );
  }

  remove(odiseaDto: OdiseaDto) {
    return this.firestoreService.remove(this.collection, odiseaDto.getId());
  }

  async update(odiseaDto: OdiseaDto) {
    this.firestoreService.update(
      this.collection,
      odiseaDto.getOdisea(),
      odiseaDto.getId()
    );
  }

  async getById(id: string): Promise<OdiseaDto> {
    const data = await this.firestoreService.getById<any>(this.collection, id);
    const {
      description,
      image,
      languages,
      maxCapacity,
      name,
      numberVotes,
      totalScoreVotes,
      uid,
      tags
    } = data;
  
    const odisea = new OdiseaDto(
      id,
      description,
      image,
      languages,
      maxCapacity,
      name,
      numberVotes,
      totalScoreVotes,
      uid,
      tags
    );
  
    return odisea;
  }
}
