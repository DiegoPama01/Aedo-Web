import { Timestamp } from "@angular/fire/firestore";
import { ILanguage } from "./language.interface";

export interface IOdiseaDates {
    date:Timestamp;
    language:ILanguage;
    maxCapacity:number;
    numReservations:number;
    odiseaCalendarId:string;
    odiseaId:string;


    toJSON():any
}
