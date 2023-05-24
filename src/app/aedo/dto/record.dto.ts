import { Record } from "../models/records.model";
import { Timestamp } from "@angular/fire/firestore";

export class RecordDto {
  private id: string;
  private lastModified: Timestamp;
  private userId: string;
  private data: any;

  constructor(id: string, lastModified: Timestamp, userId: string, data: any) {
    this.id = id;
    this.lastModified = lastModified;
    this.userId = userId;
    this.data = data;
  }


  public getId(): string {
    return this.id;
  }

  public getLastModified(): Timestamp {
    return this.lastModified;
  }

  public setLastModified(lastModified: Timestamp): void {
    this.lastModified = lastModified;
  }

  public getuserId(): string {
    return this.userId;
  }

  public setuserId(userId: string): void {
    this.userId = userId;
  }

  public getData(): any {
    return this.data;
  }

  public setData(data: any): void {
    this.data = data;
  }

  public getRecord(): Record {
    return new Record(this.lastModified,this.userId,this.data);
  }
}