import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import { calendarType, IOdiseaCalendar } from '../interfaces/odisea-calendar.interface';

export class OdiseaCalendar implements IOdiseaCalendar {
  id: string;
  calendarType: calendarType;
  dates:
    | Array<string>
    | { endDate: Timestamp; startDate: Timestamp }
    | Timestamp;
  language: ILanguage;
  odiseaID: string;

  constructor(id: string, calendarType: calendarType, dates: | Array<string> | { endDate: Timestamp; startDate: Timestamp }| Timestamp, language: ILanguage, odiseaID: string) {
    this.id = id;
    this.calendarType = calendarType;
    this.dates = dates;
    this.language = language;
    this.odiseaID = odiseaID;
  }
}
