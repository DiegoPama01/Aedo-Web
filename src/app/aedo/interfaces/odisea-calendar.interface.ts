import { Timestamp } from "@angular/fire/firestore";
import { ILanguage } from "./language.interface";

export interface IOdiseaCalendar {
    id:string;
    calendarType: calendarType;
    dates: Array<string> | {endDate:Timestamp,startDate:Timestamp} | Timestamp;
    language:ILanguage;
    odiseaID:string;
}

export enum calendarType{
    frequencyDatesCalendar = "frequencyDatesCalendar",
    multiplesDatesCalendar = "multiplesDatesCalendar",
    rangeDatesCalendar = "rangeDatesCalendar",
    singleDateCalendar = "singleDateCalendar",
}
