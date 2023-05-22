import { Timestamp } from "@angular/fire/firestore";
import { ILanguage } from "./language.interface";

export interface IOdiseaDates {
    date:Timestamp;
    language:ILanguage;
    maxCapacity:number;
    numReservations:number;
    odiseaCalendarID:string;
    odiseaID:string;


    toJSON():any
}
