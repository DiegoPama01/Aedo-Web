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
  /**
   * Constructs an instance of the StorageService.
   * @param storage - Storage instance provided by Angular.
   */
  constructor(private storage: Storage) {}

  /**
   * Uploads an icon to the storage.
   * @param fileName - File name.
   * @param file - File to upload.
   * @returns A promise that resolves when the upload is complete.
   */
  uploadIcon = async (fileName: string, file: any) => {
    const storageRef = ref(this.storage, fileName);
    await uploadBytes(storageRef, file);
  };

  /**
   * Uploads a file to the storage from a remote URL.
   * @param fileName - File name.
   * @param uploadUri - Remote URL of the file to upload.
   * @returns A promise that resolves when the upload is complete.
   */
  uploadFile = async (fileName: string, uploadUri: string) => {
    const storageRef = ref(this.storage, fileName);
    const response = await fetch(uploadUri);
    const blob = await response.blob();
    await uploadBytes(storageRef, blob);
  };

  /**
   * Downloads a file from the storage.
   * @param fileName - Name of the file to download.
   * @returns A promise that resolves with the download URL of the file.
   */
  downloadFile = async (fileName: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, fileName);
    return await getDownloadURL(storageRef);
  };

  /**
   * Removes a file from the storage.
   * @param fileName - Name of the file to remove.
   * @returns A promise that resolves when the deletion is complete.
   */
  removeFile = async (fileName: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, fileName);
    await deleteObject(storageRef);
  };
}
