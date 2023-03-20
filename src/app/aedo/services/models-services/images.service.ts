import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private storage: StorageService) {}

  uploadImage = async (fileName: string, uploadUri: string) => {
    return await this.storage.uploadFile('images/' + fileName, uploadUri);
  };

  downloadImage = async (fileName: string) => {
    return await this.storage.downloadFile('images/' + fileName);
  };
}
