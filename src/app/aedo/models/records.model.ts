import { Timestamp } from '@angular/fire/firestore';
import { IRecord } from '../interfaces/record.interface';

export class Record implements IRecord {
  id: string;
  lastModified: Timestamp;
  userID: string;
  data: any;

  constructor(
    id: string,
    lastModified: Timestamp,
    userID: string,
    data: any
  ) {
    this.id = id;
    this.lastModified = lastModified;
    this.userID = userID;
    this.data = data;
  }
}
