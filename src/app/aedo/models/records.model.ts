import { Timestamp } from '@angular/fire/firestore';
import { IRecord } from '../interfaces/record.interface';

export class Record implements IRecord {
  lastModified: Timestamp;
  userId: string;
  data: any;

  constructor(
    lastModified: Timestamp,
    userID: string,
    data: any
  ) {
    this.lastModified = lastModified;
    this.userId = userID;
    this.data = data;
  }

  toJSON() {
    return {
      lastModified: this.lastModified.toDate(),
      userID: this.userId,
      data: this.data
    };
  }
}
