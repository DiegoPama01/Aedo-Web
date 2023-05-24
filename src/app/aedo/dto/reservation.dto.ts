import { Reservation } from '../models/reservations.model';
import { ILanguage } from '../interfaces/language.interface';

/**
 * Represents a Reservation DTO (Data Transfer Object) used for transferring reservation data.
 */
export class ReservationDto {
  private id: string;
  private language: ILanguage;
  private odiseaDateID: string;
  private userId: string;
  private userReservations: number;

  /**
   * Creates an instance of ReservationDto.
   * @param id - The ID of the reservation.
   * @param language - The language of the reservation.
   * @param odiseaDateID - The ID of the Odisea date associated with the reservation.
   * @param userId - The ID of the user associated with the reservation.
   * @param userReservations - The number of reservations made by the user.
   */
  constructor(
    id: string,
    language: ILanguage,
    odiseaDateID: string,
    userId: string,
    userReservations: number
  ) {
    this.id = id;
    this.language = language;
    this.odiseaDateID = odiseaDateID;
    this.userId = userId;
    this.userReservations = userReservations;
  }

  /**
   * Gets the ID of the reservation.
   * @returns The ID of the reservation.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the language of the reservation.
   * @returns The language of the reservation.
   */
  public getLanguage(): ILanguage {
    return this.language;
  }

  /**
   * Sets the language of the reservation.
   * @param language - The language to set.
   */
  public setLanguage(language: ILanguage): void {
    this.language = language;
  }

  /**
   * Gets the number of reservations made by the user.
   * @returns The number of reservations made by the user.
   */
  public getUserReservations(): number {
    return this.userReservations;
  }

  /**
   * Sets the number of reservations made by the user.
   * @param userReservations - The number of reservations to set.
   */
  public setUserReservations(userReservations: number): void {
    this.userReservations = userReservations;
  }

  /**
   * Gets the ID of the Odisea date associated with the reservation.
   * @returns The ID of the Odisea date associated with the reservation.
   */
  public getOdiseaDateID(): string {
    return this.odiseaDateID;
  }

  /**
   * Sets the ID of the Odisea date associated with the reservation.
   * @param odiseaDateID - The ID to set.
   */
  public setOdiseaDateID(odiseaDateID: string): void {
    this.odiseaDateID = odiseaDateID;
  }

  /**
   * Gets the ID of the user associated with the reservation.
   * @returns The ID of the user associated with the reservation.
   */
  public getUserId(): string {
    return this.userId;
  }

  /**
   * Sets the ID of the user associated with the reservation.
   * @param userId - The ID to set.
   */
  public setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Gets the Reservation object associated with the ReservationDto.
   * @returns The Reservation object.
   */
  public getReservation(): Reservation {
    return new Reservation(
      this.language,
      this.odiseaDateID,
      this.userId,
      this.userReservations
    );
  }
}
