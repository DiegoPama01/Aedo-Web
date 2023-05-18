import { Reservation } from '../models/reservations.model';
import { ILanguage } from '../interfaces/language.interface';

export class ReservationDto {
  private id: string;
  private language: ILanguage;
  private odiseaDateID: string;
  private userID: string;

  constructor(
    id: string,
    language: ILanguage,
    odiseaDateID: string,
    userID: string
  ) {
    this.id = id;
    this.language = language;
    this.odiseaDateID = odiseaDateID;
    this.userID = userID;
  }

  public getId(): string {
    return this.id;
  }

  public getLanguage(): ILanguage {
    return this.language;
  }

  public setLanguage(language: ILanguage): void {
    this.language = language;
  }

  public getOdiseaDateID(): string {
    return this.odiseaDateID;
  }

  public setOdiseaDateID(odiseaDateID: string): void {
    this.odiseaDateID = odiseaDateID;
  }

  public getUserID(): string {
    return this.userID;
  }

  public setUserID(userID: string): void {
    this.userID = userID;
  }

  public getReservation(): Reservation {
    return new Reservation(this.language, this.odiseaDateID, this.userID);
  }
}
