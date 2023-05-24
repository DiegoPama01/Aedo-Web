import { Record } from '../models/records.model';
import { Timestamp } from '@angular/fire/firestore';

/**
 * Represents a Record DTO (Data Transfer Object) used for transferring record data.
 */
export class RecordDto {
  private id: string;
  private lastModified: Timestamp;
  private userId: string;
  private data: any;

  /**
   * Creates an instance of RecordDto.
   * @param id - The ID of the record.
   * @param lastModified - The timestamp of the last modification of the record.
   * @param userId - The ID of the user associated with the record.
   * @param data - The data of the record.
   */
  constructor(id: string, lastModified: Timestamp, userId: string, data: any) {
    this.id = id;
    this.lastModified = lastModified;
    this.userId = userId;
    this.data = data;
  }

  /**
   * Gets the ID of the record.
   * @returns The ID of the record.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the timestamp of the last modification of the record.
   * @returns The timestamp of the last modification of the record.
   */
  public getLastModified(): Timestamp {
    return this.lastModified;
  }

  /**
   * Sets the timestamp of the last modification of the record.
   * @param lastModified - The timestamp to set.
   */
  public setLastModified(lastModified: Timestamp): void {
    this.lastModified = lastModified;
  }

  /**
   * Gets the ID of the user associated with the record.
   * @returns The ID of the user associated with the record.
   */
  public getUserId(): string {
    return this.userId;
  }

  /**
   * Sets the ID of the user associated with the record.
   * @param userId - The ID to set.
   */
  public setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Gets the data of the record.
   * @returns The data of the record.
   */
  public getData(): any {
    return this.data;
  }

  /**
   * Sets the data of the record.
   * @param data - The data to set.
   */
  public setData(data: any): void {
    this.data = data;
  }

  /**
   * Gets the Record object associated with the RecordDto.
   * @returns The Record object.
   */
  public getRecord(): Record {
    return new Record(this.lastModified, this.userId, this.data);
  }
}
