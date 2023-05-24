import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from './language.interface';

/**
 * Represents an Odisea calendar.
 * @interface
 */
export interface IOdiseaCalendar {
  /** The type of the calendar. */
  calendarType: calendarType;
  /** The dates of the calendar. */
  dates:
    | Array<string>
    | { endDate: Timestamp; startDate: Timestamp }
    | Timestamp;
  /** The language of the calendar. */
  language: ILanguage;
  /** The ID of the odisea associated with the calendar. */
  odiseaId: string;

  /**
   * Converts the calendar to a JSON object.
   * @returns {any} The JSON representation of the calendar.
   */
  toJSON(): any;
}

export enum calendarType {
  frequencyDatesCalendar = 'frequencyDatesCalendar',
  multiplesDatesCalendar = 'multiplesDatesCalendar',
  rangeDatesCalendar = 'rangeDatesCalendar',
  singleDateCalendar = 'singleDateCalendar',
}
