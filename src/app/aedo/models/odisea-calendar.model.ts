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

/**
 * Represents an Odisea calendar.
 */
export class OdiseaCalendar implements IOdiseaCalendar {
  /**
   * The calendar type.
   */
  calendarType: calendarType;

  /**
   * The dates associated with the calendar.
   */
  dates: DateCalendar;

  /**
   * The language of the calendar.
   */
  language: ILanguage;

  /**
   * The ID of the Odisea.
   */
  odiseaId: string;

  /**
   * Creates an instance of the OdiseaCalendar class.
   * @param calendarType - The calendar type.
   * @param dates - The dates associated with the calendar.
   * @param language - The language of the calendar.
   * @param odiseaID - The ID of the Odisea.
   */
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
    this.odiseaId = odiseaID;
  }

  /**
   * Converts the OdiseaCalendar object to JSON format.
   * @returns The OdiseaCalendar object in JSON format.
   */
  toJSON() {
    let [id, item] = this.language.item.split(' - ');
    console.log(id, item)
    return {
      calendarType: this.calendarType,
      dates: this.dates,
      language: { item: item, id: id.toUpperCase() },
      odiseaID: this.odiseaId,
    };
  }
}
