import { Timestamp } from '@angular/fire/firestore';
import { ILanguage } from '../interfaces/language.interface';
import { OdiseaDates } from '../models/odisea-dates.model';

/**
 * OdiseaDatesDto represents a data transfer object for Odisea dates.
 * It contains the properties related to Odisea dates.
 */
export class OdiseaDatesDto {
  private id: string;
  private date: Timestamp;
  private language: ILanguage;
  private maxCapacity: number;
  private numReservations: number;
  private odiseaCalendarId: string;
  private odiseaId: string;

  /**
   * Constructs a new OdiseaDatesDto object.
   * @param id The id of the Odisea date.
   * @param date The date of the Odisea.
   * @param language The language of the Odisea date.
   * @param maxCapacity The maximum capacity for the Odisea date.
   * @param numReservations The number of reservations for the Odisea date.
   * @param odiseaCalendarId The id of the Odisea calendar associated with the date.
   * @param odiseaId The id of the Odisea associated with the date.
   */
  constructor(
    id: string,
    date: Timestamp,
    language: ILanguage,
    maxCapacity: number,
    numReservations: number,
    odiseaCalendarID: string,
    odiseaID: string
  ) {
    this.id = id;
    this.date = date;
    this.language = language;
    this.maxCapacity = maxCapacity;
    this.numReservations = numReservations;
    this.odiseaCalendarId = odiseaCalendarID;
    this.odiseaId = odiseaID;
  }

  /**
   * Gets the id of the Odisea date.
   * @returns The id of the Odisea date.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the date of the Odisea.
   * @returns The date of the Odisea.
   */
  public getDate(): Timestamp {
    return this.date;
  }

  /**
   * Sets the date of the Odisea.
   * @param date The new date for the Odisea.
   */
  public setDate(date: Timestamp): void {
    this.date = date;
  }

  /**
   * Gets the language of the Odisea date.
   * @returns The language of the Odisea date.
   */
  public getLanguage(): ILanguage {
    return this.language;
  }

  /**
   * Sets the language of the Odisea date.
   * @param language The new language for the Odisea date.
   */
  public setLanguage(language: ILanguage): void {
    this.language = language;
  }

  /**
   * Gets the maximum capacity for the Odisea date.
   * @returns The maximum capacity for the Odisea date.
   */
  public getMaxCapacity(): number {
    return this.maxCapacity;
  }

  /**
   * Sets the maximum capacity for the Odisea date.
   * @param maxCapacity The new maximum capacity for the Odisea date.
   */
  public setMaxCapacity(maxCapacity: number): void {
    this.maxCapacity = maxCapacity;
  }

  /**
   * Gets the number of reservations for the Odisea date.
   * @returns The number of reservations for the Odisea date.
   */
  public getNumReservations(): number {
    return this.numReservations;
  }

  /**
   * Sets the number of reservations for the Odisea date.
   * @param numReservations The new number of reservations for the Odisea date.
   */
  public setNumReservations(numReservations: number): void {
    this.numReservations = numReservations;
  }

  /**
   * Gets the id of the Odisea calendar associated with the date.
   * @returns The id of the Odisea calendar associated with the date.
   */
  public getOdiseaCalendarID(): string {
    return this.odiseaCalendarId;
  }

  /**
   * Sets the id of the Odisea calendar associated with the date.
   * @param odiseaCalendarID The new id of the Odisea calendar associated with the date.
   */
  public setOdiseaCalendarID(odiseaCalendarID: string): void {
    this.odiseaCalendarId = odiseaCalendarID;
  }

  /**
   * Gets the id of the Odisea associated with the date.
   * @returns The id of the Odisea associated with the date.
   */
  public getOdiseaID(): string {
    return this.odiseaId;
  }

  /**
   * Sets the id of the Odisea associated with the date.
   * @param odiseaID The new id of the Odisea associated with the date.
   */
  public setOdiseaID(odiseaID: string): void {
    this.odiseaId = odiseaID;
  }

  /**
   * Converts the OdiseaDatesDto object to an instance of OdiseaDates.
   * @returns An instance of OdiseaDates based on the OdiseaDatesDto object.
   */
  public getOdiseaDate(): OdiseaDates {
    return new OdiseaDates(
      this.date,
      this.language,
      this.maxCapacity,
      this.numReservations,
      this.odiseaCalendarId,
      this.odiseaId
    );
  }
}
