import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing images.
 */
export class ImagesService {
  /**
   * Constructs an instance of ImagesService.
   * @param storage - Instance of StorageService.
   */
  constructor(private storage: StorageService) {}

  /**
   * Uploads an icon to storage.
   * @param fileName - File name.
   * @param id - Icon identifier.
   * @param file - File to upload.
   * @returns A promise that resolves when the upload is complete.
   */
  uploadIcon = async (fileName: string, id: string, file: any) => {
    return await this.storage.uploadIcon('icons/' + fileName + '/' + id, file);
  };

  /**
   * Downloads an icon from storage.
   * @param fileName - File name.
   * @param id - Icon identifier.
   * @returns A promise that resolves with the download URL of the icon.
   */
  downloadIcon = async (fileName: string, id: string) => {
    return await this.storage.downloadFile('icons/' + fileName + '/' + id);
  };

  /**
   * Downloads an image from storage.
   * @param fileName - Image file name.
   * @returns A promise that resolves with the download URL of the image.
   */
  downloadImage = async (fileName: string) => {
    return await this.storage.downloadFile('images/' + fileName);
  };

  /**
   * Uploads an image to storage from a remote URL.
   * @param fileName - Image file name.
   * @param uploadUri - Remote URL of the image to upload.
   * @returns A promise that resolves when the upload is complete.
   */
  uploadImage = async (fileName: string, uploadUri: string) => {
    return await this.storage.uploadFile('images/' + fileName, uploadUri);
  };

  /**
   * Deletes an icon from storage.
   * @param fileName - Icon file name.
   * @returns A promise that resolves when the deletion is complete.
   */
  deleteIcon = async (fileName: string) => {
    return await this.storage.removeFile('icons/' + fileName + '/' + fileName);
  };

  /**
   * Deletes an image from storage.
   * @param fileName - Image file name.
   * @returns A promise that resolves when the deletion is complete.
   */
  deleteImage = async (fileName: string) => {
    return await this.storage.removeFile('images/' + fileName);
  };
}
