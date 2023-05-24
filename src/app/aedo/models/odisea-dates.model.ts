import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import { IOdiseaDates } from '../interfaces/odisea-dates.interface';

export class OdiseaDates implements IOdiseaDates {
  date: Timestamp;
  language: ILanguage;
  maxCapacity: number;
  numReservations: number;
  odiseaCalendarId: string;
  odiseaId: string;

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
    this.odiseaCalendarId = odiseaCalendarID;
    this.odiseaId = odiseaID;
  }

  toJSON() {
    return {
      date: this.date,
      language: this.language.toJSON(),
      maxCapacity: this.maxCapacity,
      numReservations: this.numReservations,
      odiseaCalendarID: this.odiseaCalendarId,
      odiseaID: this.odiseaId
    };
  }
}
