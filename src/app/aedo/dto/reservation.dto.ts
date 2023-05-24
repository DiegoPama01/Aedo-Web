import { Reservation } from '../models/reservations.model';
import { ILanguage } from '../interfaces/language.interface';

export class ReservationDto {
  private id: string;
  private language: ILanguage;
  private odiseaDateID: string;
  private userId: string;
  private userReservations:number;

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

  public getId(): string {
    return this.id;
  }

  public getLanguage(): ILanguage {
    return this.language;
  }

  public setLanguage(language: ILanguage): void {
    this.language = language;
  }

  public getUserReservations(): number {
    return this.userReservations;
  }

  public setUserReservations(userReservations: number): void {
    this.userReservations = userReservations;
  }

  public getOdiseaDateID(): string {
    return this.odiseaDateID;
  }

  public setOdiseaDateID(odiseaDateID: string): void {
    this.odiseaDateID = odiseaDateID;
  }

  public getuserId(): string {
    return this.userId;
  }

  public setuserId(userId: string): void {
    this.userId = userId;
  }

  public getReservation(): Reservation {
    return new Reservation(this.language, this.odiseaDateID, this.userId, this.userReservations);
  }
}
