import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private storage: StorageService) {}

  uploadImage = async (fileName: string, uploadUri: string) => {
    return await this.storage.uploadFile('icons/' + fileName, uploadUri);
  };

  downloadImage = async (fileName: string) => {
    return await this.storage.downloadFile('icons/' + fileName);
  };
}
