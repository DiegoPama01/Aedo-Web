import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private storage: StorageService) {}

  uploadIcon = async (fileName: string, id: string,  file: any) => {
    return await this.storage.uploadIcon('icons/' + fileName + "/" + id, file);
  };

  downloadIcon = async (fileName: string, id: string) => {
    return await this.storage.downloadFile('icons/' + fileName + "/" + id);
  };

  downloadImage = async (fileName: string) => {
    return await this.storage.downloadFile('images/' + fileName);
  };

  uploadImage = async (fileName: string, uploadUri: string) => {
    return await this.storage.uploadFile('images/' + fileName, uploadUri);
  };

  deleteIcon = async (fileName: string) => {
    return await this.storage.removeFile('icons/' + fileName + "/" + fileName);
  };
  deleteImage = async (fileName: string) => {
    return await this.storage.removeFile('images/' + fileName);
  };
}
