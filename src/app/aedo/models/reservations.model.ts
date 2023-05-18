import { user } from "@angular/fire/auth";
import { ILanguage } from "../interfaces/language.interface";
import { IReservation } from "../interfaces/reservation.interface";


export class Reservation implements IReservation {
    language:ILanguage;
    odiseaDateID:string;
    userID:string;

  constructor(
    language:ILanguage,
    odiseaDateID:string,
    userID:string
  ) {
    this.language = language;
    this.odiseaDateID=odiseaDateID;
    this.userID=userID;
  }
}