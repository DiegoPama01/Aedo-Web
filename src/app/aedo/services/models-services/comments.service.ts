import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Observable, map } from 'rxjs';
import { CommentDto } from '../../dto/comment.dto';
import { IComment } from '../../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing comments.
 */
export class CommentService {
  collection: string = 'comments';

  /**
   * Constructs an instance of CommentService.
   * @param firestoreService - Instance of FirestoreService.
   */
  constructor(private firestoreService: FirestoreService) {}

  /**
   * Creates a new comment.
   * @param comment - Object representing the comment to create.
   * @returns A promise that resolves when the comment is created successfully.
   */
  create(comment: IComment) {
    return this.firestoreService.create(this.collection, comment.toJSON());
  }

  /**
   * Gets the collection of comments.
   * @returns An observable that emits an array of CommentDto objects.
   */
  getCollection(): Observable<CommentDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data.map((item) => {
          return new CommentDto(
            item.id,
            item.body,
            item.odiseaID,
            item.rating,
            item.reservationID,
            item.userID,
            item.userName
          );
        });
      })
    );
  }

  /**
   * Gets comments by odisea ID.
   * @param odiseaId - ID of the odisea.
   * @returns An observable that emits an array of CommentDto objects filtered by the odisea ID.
   */
  getCommentsByOdiseaId(odiseaId: string): Observable<CommentDto[]> {
    return this.firestoreService.getCollection(this.collection).pipe(
      map((data: any[]) => {
        return data
          .filter((item) => item.odiseaID === odiseaId)
          .map((item) => {
            return new CommentDto(
              item.id,
              item.body,
              item.odiseaID,
              item.rating,
              item.reservationID,
              item.userID,
              item.userName
            );
          });
      })
    );
  }

  /**
   * Removes a comment.
   * @param commentDto - CommentDto object representing the comment to remove.
   * @returns A promise that resolves when the comment is removed successfully.
   */
  remove(commentDto: CommentDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .remove(this.collection, commentDto.getId())
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Updates a comment.
   * @param commentDto - CommentDto object representing the comment to update.
   * @returns A promise that resolves when the comment is updated successfully.
   */
  async update(commentDto: CommentDto): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestoreService
        .update(
          this.collection,
          commentDto.getComment().toJSON(),
          commentDto.getId()
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
   * Gets a comment by its ID.
   * @param id - Comment ID.
   * @returns A promise that resolves with the corresponding CommentDto object.
   */
  async getById(id: string): Promise<CommentDto> {
    return new Promise<CommentDto>((resolve, reject) => {
      this.firestoreService
        .getById<any>(this.collection, id)
        .then((data) => {
          const { body, odiseaId, rating, reservationId, userID, username } =
            data;

          const comment = new CommentDto(
            id,
            body,
            odiseaId,
            rating,
            reservationId,
            userID,
            username
          );
          resolve(comment);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
