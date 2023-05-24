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
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  /**
   * Constructs an instance of the FirestoreService.
   * @param firestore - Firestore instance provided by Angular.
   */
  constructor(private firestore: Firestore) {}

  /**
   * Retrieves a collection of documents from Firestore.
   * @param coll - Collection name.
   * @returns An observable that emits the collection of documents.
   */
  getCollection = (coll: any) => {
    const collRef = collection(this.firestore, coll);
    return collectionData(collRef, { idField: 'id' });
  };

  /**
   * Creates a new document in the specified collection.
   * @param coll - Collection name.
   * @param item - Data object to add as a document.
   * @returns A promise that resolves with the reference to the new document.
   */
  create = (coll: any, item: any) => {
    return addDoc(collection(this.firestore, coll), Object.assign({}, item));
  };

  /**
   * Sets or replaces an existing document in the specified collection.
   * @param coll - Collection name.
   * @param item - Data object to set or replace as a document.
   * @returns A promise that resolves when the set operation is complete.
   */
  set = (coll: any, item: any) => {
    let { id: _, ...rest } = item;
    return setDoc(doc(this.firestore, coll, item.id), Object.assign({}, rest));
  };

  /**
   * Updates an existing document in the specified collection.
   * @param coll - Collection name.
   * @param item - Data object with the updates to apply.
   * @param id - ID of the document to update.
   * @returns A promise that resolves when the update operation is complete.
   */
  update = (coll: string, item: any, id: string) => {
    return updateDoc(doc(this.firestore, coll, id), Object.assign({}, item));
  };

  /**
   * Deletes a document from the specified collection.
   * @param coll - Collection name.
   * @param id - ID of the document to delete.
   * @returns A promise that resolves when the delete operation is complete.
   */
  remove = (coll: string, id: string) => {
    return deleteDoc(doc(this.firestore, coll, id));
  };

  /**
   * Retrieves a document by its ID from the specified collection.
   * @param collection - Collection name.
   * @param id - ID of the document to retrieve.
   * @returns A promise that resolves with the corresponding document.
   * @throws An error if the document does not exist in the specified collection.
   */
  getById<T>(collection: string, id: string): Promise<T> {
    const docRef = doc(this.firestore, collection, id);
    return getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const dto = { ...data, id: docSnap.id } as T;
        return dto;
      } else {
        throw new Error(
          `Document with ID ${id} does not exist in collection ${collection}`
        );
      }
    });
  }
}
