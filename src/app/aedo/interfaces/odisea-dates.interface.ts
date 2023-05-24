import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from './language.interface';

/**
 * Represents the dates of an Odisea.
 * @interface
 */
export interface IOdiseaDates {
  /** The date of the Odisea. */
  date: Timestamp;
  /** The language of the Odisea. */
  language: ILanguage;
  /** The maximum capacity of the Odisea. */
  maxCapacity: number;
  /** The number of reservations for the Odisea. */
  numReservations: number;
  /** The ID of the Odisea calendar associated with the dates. */
  odiseaCalendarId: string;
  /** The ID of the Odisea associated with the dates. */
  odiseaId: string;

  /**
   * Converts the Odisea dates to a JSON object.
   * @returns {any} The JSON representation of the Odisea dates.
   */
  toJSON(): any;
}
