import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Language } from '../interfaces/language';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  addLanguage(lang: Language){
    const langRef = collection(this.firestore,"languages");
    return addDoc(langRef, lang)
  }
}
