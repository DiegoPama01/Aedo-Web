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

  //#region Comment
  createComment(comment: IComment){
    return this.create("comments",comment)
  }

  getComments():Observable<IComment[]>{
    return this.getCollection("comments") as Observable<IComment[]>
  }

  removeComment(comment: IComment){
    return this.remove("comments",comment.id)
  }

  async updateComment(comment: IComment){
    this.update("comments",comment, comment.id)
  }

  async getCommentById(id:string): Promise<IComment>{
    return await this.getById("comments",id) as IComment
  }
  //#endregion






  //#region Language
  addLanguage(lang: ILanguage){
    const langRef = collection(this.firestore,"languages");
    return addDoc(langRef, lang)
  }

  getLanguages():Observable<ILanguage[]>{
    const langRef = collection(this.firestore,"languages");
    return collectionData(langRef,{idField:"id"}) as Observable<ILanguage[]>
  }

  async getLanguageById(id:string):Promise<ILanguage>{
    const langRef = doc(this.firestore, "languages", id)
    const docSnap = await getDoc(langRef)
    return docSnap.data() as ILanguage
  }

  deleteLanguage(lang: ILanguage){
    const langDocRef = doc(this.firestore, `places/${lang.id}`);
    return deleteDoc(langDocRef);
  }

  async updateLanguage(lang:ILanguage){
    const langRef = collection(this.firestore, `languages`);
    let queryLanguage = query(langRef, where("id","==",lang.id))
    const querySnapshot = await getDocs(queryLanguage)
    querySnapshot.forEach( async (document) => {
      const docRef = doc(this.firestore, "languages", lang.id)
      await updateDoc(docRef,{...lang})
    })
  }
  //#endregion
}
