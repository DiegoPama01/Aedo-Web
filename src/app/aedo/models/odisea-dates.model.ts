import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import { IOdiseaDates } from '../interfaces/odisea-dates.interface';

/**
 * Represents Odisea dates.
 */
export class OdiseaDates implements IOdiseaDates {
  /**
   * The date of the Odisea.
   */
  date: Timestamp;

  /**
   * The language of the Odisea.
   */
  language: ILanguage;

  /**
   * The maximum capacity of the Odisea.
   */
  maxCapacity: number;

  /**
   * The number of reservations for the Odisea.
   */
  numReservations: number;

  /**
   * The ID of the Odisea calendar associated with the dates.
   */
  odiseaCalendarId: string;

  /**
   * The ID of the Odisea.
   */
  odiseaId: string;

  /**
   * Creates an instance of the OdiseaDates class.
   * @param date - The date of the Odisea.
   * @param language - The language of the Odisea.
   * @param maxCapacity - The maximum capacity of the Odisea.
   * @param numReservations - The number of reservations for the Odisea.
   * @param odiseaCalendarID - The ID of the Odisea calendar associated with the dates.
   * @param odiseaID - The ID of the Odisea.
   */
  constructor(
    date: Timestamp,
    language: ILanguage,
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

  /**
   * Converts the OdiseaDates object to JSON format.
   * @returns The OdiseaDates object in JSON format.
   */
  toJSON() {
    return {
      date: this.date,
      language: this.language.toJSON(),
      maxCapacity: this.maxCapacity,
      numReservations: this.numReservations,
      odiseaCalendarID: this.odiseaCalendarId,
      odiseaID: this.odiseaId,
    };
  }
}
