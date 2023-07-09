import { ILanguage } from '../interfaces/language.interface';
import { IReservation } from '../interfaces/reservation.interface';

/**
 * Represents a reservation.
 */
export class Reservation implements IReservation {
  /**
   * The language associated with the reservation.
   */
  language: ILanguage;

  /**
   * The ID of the Odisea date for the reservation.
   */
  odiseaDateId: string;

  /**
   * The ID of the user making the reservation.
   */
  userId: string;

  /**
   * The number of reservations made by the user.
   */
  userReservations: number;

  isEducativeReservation: boolean = false;

  /**
   * Creates an instance of the Reservation class.
   * @param language - The language associated with the reservation.
   * @param odiseaDateId - The ID of the Odisea date for the reservation.
   * @param userId - The ID of the user making the reservation.
   * @param userReservations - The number of reservations made by the user.
   */
  constructor(
    language: ILanguage,
    odiseaDateId: string,
    userId: string,
    userReservations: number
  ) {
    this.language = language;
    this.odiseaDateId = odiseaDateId;
    this.userId = userId;
    this.userReservations = userReservations;
  }

  /**
   * Converts the Reservation object to JSON format.
   * @returns The Reservation object in JSON format.
   */
  toJSON() {
    return {
      language: { item: this.language.item, id: this.language.id.toUpperCase() },
      odiseaDateID: this.odiseaDateId,
      userID: this.userId,
      userReservations: this.userReservations,
    };
  }
}
