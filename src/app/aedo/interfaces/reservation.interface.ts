import { ILanguage } from './language.interface';

/**
 * Represents a reservation.
 * @interface
 */
export interface IReservation {
  /** The language of the reservation. */
  language: ILanguage;
  /** The ID of the Odisea date associated with the reservation. */
  odiseaDateId: string;
  /** The ID of the user making the reservation. */
  userId: string;
  /** The number of reservations made by the user. */
  userReservations: number;

  /**
   * Converts the reservation to a JSON object.
   * @returns {any} The JSON representation of the reservation.
   */
  toJSON(): any;
}
