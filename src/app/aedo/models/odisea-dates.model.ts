import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import { IOdiseaDates } from '../interfaces/odisea-dates.interface';

export class OdiseaDates implements IOdiseaDates {
  id: string;
  date: Timestamp;
  language: ILanguage;
  maxCapacity: number;
  numReservations: number;
  odiseaCalendarID: string;
  odiseaID: string;

  constructor(
    id: string,
    date: Timestamp,
    language:ILanguage,
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
}
