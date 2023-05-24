import { ILanguage } from "../interfaces/language.interface";
import { IReservation } from "../interfaces/reservation.interface";


export class Reservation implements IReservation {
  language: ILanguage;
  odiseaDateId: string;
  userId: string;
  userReservations: number;

  constructor(language: ILanguage, odiseaDateID: string, userID: string, userReservations:number) {
    this.language = language;
    this.odiseaDateId = odiseaDateID;
    this.userId = userID;
    this.userReservations = userReservations;
  }

  toJSON() {
    return {
      language: this.language,
      odiseaDateID: this.odiseaDateId,
      userID: this.userId,
      userReservations: this.userReservations
    };
  }
}
