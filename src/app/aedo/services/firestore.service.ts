import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDoc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ILanguage } from '../interfaces/language.interface';
import { IComment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getCollection = (collection:any) => {
    const collRef = collection(this.firestore, collection);
    return collectionData(collRef,{idField:"id"})
  };

  create = (collection:any, item:any) =>{
    return addDoc(collection(this.firestore, collection), Object.assign({}, item));
  }

  update = (collection:string,item:any,id:string) => {
    return updateDoc(doc(this.firestore, collection, id), Object.assign({}, item));
  }

  remove = (collection:any,id:string) => {
    return deleteDoc(doc(this.firestore, collection, id));
  };

  getById = async (collection:any,id:string) => {
    const docRef = doc(this.firestore, collection, id);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id };
  };
}
