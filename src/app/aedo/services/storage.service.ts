import { Injectable } from '@angular/core';
import {
  Storage,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  uploadIcon = async (fileName: string, file: any) => {
    const storageRef = ref(this.storage, fileName);
    await uploadBytes(storageRef, file);
  };

  uploadFile = async (fileName: string, uploadUri: string) => {
    const storageRef = ref(this.storage, fileName);
    const file = await fetch(fileName);
    const bytes = await file.blob();
    await uploadBytes(storageRef, bytes);
  };

  downloadFile = async (fileName: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, fileName);
    return await getDownloadURL(storageRef);
  };
  removeFile = async (fileName: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, fileName);
    await deleteObject(storageRef);
  };
}
