import { user } from "@angular/fire/auth";
import { ILanguage } from "../interfaces/language.interface";
import { IReservation } from "../interfaces/reservation.interface";


export class Reservation implements IReservation {
    id:string;
    language:ILanguage;
    odiseaDateID:string;
    userID:string;

  constructor(
    id:string,
    language:ILanguage,
    odiseaDateID:string,
    userID:string
  ) {
    this.id=id;
    this.language = language;
    this.odiseaDateID=odiseaDateID;
    this.userID=userID;
  }
}