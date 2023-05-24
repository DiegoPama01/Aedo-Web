import { Timestamp } from '@angular/fire/firestore';
import { IRecord } from '../interfaces/record.interface';

/**
 * Represents a record.
 */
export class Record implements IRecord {
  /**
   * The last modified timestamp of the record.
   */
  lastModified: Timestamp;

  /**
   * The user ID associated with the record.
   */
  userId: string;

  /**
   * The data of the record.
   */
  data: any;

  /**
   * Creates an instance of the Record class.
   * @param lastModified - The last modified timestamp of the record.
   * @param userId - The user ID associated with the record.
   * @param data - The data of the record.
   */
  constructor(lastModified: Timestamp, userId: string, data: any) {
    this.lastModified = lastModified;
    this.userId = userId;
    this.data = data;
  }

  /**
   * Converts the Record object to JSON format.
   * @returns The Record object in JSON format.
   */
  toJSON() {
    return {
      lastModified: this.lastModified.toDate(),
      userID: this.userId,
      data: this.data,
    };
  }
}
