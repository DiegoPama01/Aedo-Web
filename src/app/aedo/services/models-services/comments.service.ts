import { Injectable } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';
import { FirestoreService } from '../firestore.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  collection:string = "comments"

  constructor(private firestoreService:FirestoreService) { }

  create(comment: IComment){
    return this.firestoreService.create(this.collection,comment)
  }

  getCollection():Observable<IComment[]>{
    return this.firestoreService.getCollection(this.collection) as Observable<IComment[]>
  }

  remove(comment: IComment){
    return this.firestoreService.remove(this.collection,comment.id)
  }

  async update(comment: IComment){
    this.firestoreService.update(this.collection,comment, comment.id)
  }

  async getById(id:string): Promise<IComment>{
    return await this.firestoreService.getById(this.collection,id) as IComment
  }
}
