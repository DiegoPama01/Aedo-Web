import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private storage: StorageService) {}

  uploadIcon = async (fileName: string, file: any) => {
    return await this.storage.uploadIcon('icons/' + fileName, file);
  };

  downloadImage = async (fileName: string) => {
    return await this.storage.downloadFile('icons/' + fileName);
  };

  uploadImage = async (fileName: string, uploadUri: string) => {
    return await this.storage.uploadFile('images/' + fileName, uploadUri);
  };
}
