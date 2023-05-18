import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import { OdiseaDates } from '../models/odisea-dates.model';

export class OdiseaDatesDto {
  private id: string;
  private date: Timestamp;
  private language: ILanguage;
  private maxCapacity: number;
  private numReservations: number;
  private odiseaCalendarID: string;
  private odiseaID: string;

  constructor(
    id: string,
    date: Timestamp,
    language: ILanguage,
    maxCapacity: number,
    numReservations: number,
    odiseaCalendarID: string,
    odiseaID: string
  ) {
    this.id = id;
    this.date = date;
    this.language = language;
    this.maxCapacity = maxCapacity;
    this.numReservations = numReservations;
    this.odiseaCalendarID = odiseaCalendarID;
    this.odiseaID = odiseaID;
  }

  public getId(): string {
    return this.id;
  }

  public getDate(): Timestamp {
    return this.date;
  }

  public setDate(date: Timestamp): void {
    this.date = date;
  }

  public getLanguage(): ILanguage {
    return this.language;
  }

  public setLanguage(language: ILanguage): void {
    this.language = language;
  }

  public getMaxCapacity(): number {
    return this.maxCapacity;
  }

  public setMaxCapacity(maxCapacity: number): void {
    this.maxCapacity = maxCapacity;
  }

  public getNumReservations(): number {
    return this.numReservations;
  }

  public setNumReservations(numReservations: number): void {
    this.numReservations = numReservations;
  }

  public getOdiseaCalendarID(): string {
    return this.odiseaCalendarID;
  }

  public setOdiseaCalendarID(odiseaCalendarID: string): void {
    this.odiseaCalendarID = odiseaCalendarID;
  }

  public getOdiseaID(): string {
    return this.odiseaID;
  }

  public setOdiseaID(odiseaID: string): void {
    this.odiseaID = odiseaID;
  }

  public getOdiseaDate(): OdiseaDates {
    return new OdiseaDates(this.date, this.language, this.maxCapacity, this.numReservations, this.odiseaCalendarID, this.odiseaID);
  }
}
