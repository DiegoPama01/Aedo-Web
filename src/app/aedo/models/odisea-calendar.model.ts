import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import {
  calendarType,
  IOdiseaCalendar,
} from '../interfaces/odisea-calendar.interface';

type DateArray = Array<string>;
type DateRange = { endDate: Timestamp; startDate: Timestamp };
type DateTimestamp = Timestamp;

type DateCalendar = DateArray | DateRange | DateTimestamp;

export class OdiseaCalendar implements IOdiseaCalendar {
  calendarType: calendarType;
  dates: DateCalendar;
  language: ILanguage;
  odiseaID: string;

  constructor(
    calendarType: calendarType,
    dates:
      | Array<string>
      | { endDate: Timestamp; startDate: Timestamp }
      | Timestamp,
    language: ILanguage,
    odiseaID: string
  ) {
    this.calendarType = calendarType;
    this.dates = dates;
    this.language = language;
    this.odiseaID = odiseaID;
  }
}
