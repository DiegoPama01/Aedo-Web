import { Injectable } from '@angular/core';
import {
  Storage,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  uploadFile = async (fileName: string, uploadUri: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, uploadUri);
    const file = await fetch(fileName);
    const bytes = await file.blob();
    await uploadBytes(storageRef, bytes);
  };

  downloadFile = async (fileName: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, fileName);
    return await getDownloadURL(storageRef);
  };
}
