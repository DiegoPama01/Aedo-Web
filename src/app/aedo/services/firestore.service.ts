import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc,
  collection,
  setDoc,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getCollection = (coll: any) => {
    const collRef = collection(this.firestore, coll);
    return collectionData(collRef, { idField: 'id' });
  };

  getCollection2 = (coll: any) => {
    const collRef = collection(this.firestore, coll);
    const docs = getDocs(collRef);
    return docs;
  };

  create = (coll: any, item: any) => {
    return addDoc(collection(this.firestore, coll), Object.assign({}, item));
  };

  set = (coll: any, item: any) => {
    let { id: _, ...rest } = item;
    return setDoc(doc(this.firestore, coll, item.id), Object.assign({}, rest));
  };

  update = (coll: string, item: any, id: string) => {
    return updateDoc(doc(this.firestore, coll, id), Object.assign({}, item));
  };

  remove = (coll: string, id: string) => {
    return deleteDoc(doc(this.firestore, coll, id));
  };

  getById = async (coll: string, id: string) => {
    const docRef = doc(this.firestore, coll, id);
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id };
  };
}
