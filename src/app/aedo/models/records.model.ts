import { Timestamp } from '@angular/fire/firestore';
import { IRecord } from '../interfaces/record.interface';

export class Record implements IRecord {
  lastModified: Timestamp;
  userID: string;
  data: any;

  constructor(
    lastModified: Timestamp,
    userID: string,
    data: any
  ) {
    this.lastModified = lastModified;
    this.userID = userID;
    this.data = data;
  }
}
