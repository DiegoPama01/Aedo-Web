import { Record } from "../models/records.model";
import { Timestamp } from "@angular/fire/firestore";

export class RecordDto {
  private id: string;
  private lastModified: Timestamp;
  private userID: string;
  private data: any;

  constructor(id: string, lastModified: Timestamp, userID: string, data: any) {
    this.id = id;
    this.lastModified = lastModified;
    this.userID = userID;
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

  public getUserID(): string {
    return this.userID;
  }

  public setUserID(userID: string): void {
    this.userID = userID;
  }

  public getData(): any {
    return this.data;
  }

  public setData(data: any): void {
    this.data = data;
  }

  public getRecord(): Record {
    return new Record(this.lastModified,this.userID,this.data);
  }
}