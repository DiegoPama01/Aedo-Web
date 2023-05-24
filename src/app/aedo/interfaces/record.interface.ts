import { Timestamp } from '@angular/fire/firestore';

/**
 * Represents a record.
 * @interface
 */
export interface IRecord {
  /** The last modified timestamp of the record. */
  lastModified: Timestamp;
  /** The ID of the user associated with the record. */
  userId: string;
  /** The data of the record. */
  data: any;

  /**
   * Converts the record to a JSON object.
   * @returns {any} The JSON representation of the record.
   */
  toJSON(): any;
}
