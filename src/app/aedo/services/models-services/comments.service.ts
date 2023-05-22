import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { CommentDto } from '../../dto/comment.dto';
import { IComment } from '../../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  collection: string = 'comments';

  constructor(private firestoreService: FirestoreService) {}

  create(comment: IComment) {
    return this.firestoreService.create(
      this.collection,
      comment.toJSON()
    );
  }

  getCollection(): Observable<CommentDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map(item => {
          return new CommentDto(
            item.id,
            item.body,
            item.odiseaId,
            item.rating,
            item.reservationId,
            item.userId,
            item.username
          );
        });
      })
    );
  }

  remove(commentDto: CommentDto) {
    return this.firestoreService.remove(this.collection, commentDto.getId());
  }

  async update(commentDto: CommentDto) {
    this.firestoreService.update(
      this.collection,
      commentDto.getComment(),
      commentDto.getId()
    );
  }

  async getById(id: string): Promise<CommentDto> {
    const data = await this.firestoreService.getById<any>(this.collection, id);
    const {
      body,
      odiseaId,
      rating,
      reservationId,
      userId,
      username
    } = data;
  
    const comment = new CommentDto(
      id,
      body,
      odiseaId,
      rating,
      reservationId,
      userId,
      username
    );

    return comment;
  }
}
