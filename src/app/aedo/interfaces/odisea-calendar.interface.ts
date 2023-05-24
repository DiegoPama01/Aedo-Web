import { Timestamp } from "@angular/fire/firestore";
import { ILanguage } from "./language.interface";

export interface IOdiseaCalendar {
    calendarType: calendarType;
    dates: Array<string> | {endDate:Timestamp,startDate:Timestamp} | Timestamp;
    language:ILanguage;
    odiseaId:string;

    toJSON():any
}

export enum calendarType{
    frequencyDatesCalendar = "frequencyDatesCalendar",
    multiplesDatesCalendar = "multiplesDatesCalendar",
    rangeDatesCalendar = "rangeDatesCalendar",
    singleDateCalendar = "singleDateCalendar",
}



