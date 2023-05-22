import { ILanguage } from "../interfaces/language.interface";
import { IReservation } from "../interfaces/reservation.interface";


export class Reservation implements IReservation {
  language: ILanguage;
  odiseaDateID: string;
  userID: string;

  constructor(language: ILanguage, odiseaDateID: string, userID: string) {
    this.language = language;
    this.odiseaDateID = odiseaDateID;
    this.userID = userID;
  }

  toJSON() {
    return {
      language: this.language,
      odiseaDateID: this.odiseaDateID,
      userID: this.userID
    };
  }
}
