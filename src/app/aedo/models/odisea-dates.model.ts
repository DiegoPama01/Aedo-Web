import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import { IOdiseaDates } from '../interfaces/odisea-dates.interface';

export class OdiseaDates implements IOdiseaDates {
  date: Timestamp;
  language: ILanguage;
  maxCapacity: number;
  numReservations: number;
  odiseaCalendarID: string;
  odiseaID: string;

  constructor(
    date: Timestamp,
    language:ILanguage,
    maxCapacity: number,
    numReservations: number,
    odiseaCalendarID: string,
    odiseaID: string
  ) {
    this.date = date;
    this.language = language;
    this.maxCapacity = maxCapacity;
    this.numReservations = numReservations;
    this.odiseaCalendarID = odiseaCalendarID;
    this.odiseaID = odiseaID;
  }

  toJSON() {
    return {
      date: this.date,
      language: this.language.toJSON(),
      maxCapacity: this.maxCapacity,
      numReservations: this.numReservations,
      odiseaCalendarID: this.odiseaCalendarID,
      odiseaID: this.odiseaID
    };
  }
}
