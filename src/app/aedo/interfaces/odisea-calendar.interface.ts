import { Timestamp } from "@angular/fire/firestore";
import { ILanguage } from "./language.interface";

export interface IOdiseaCalendar {
    id:string;
    calendarType: caledarType;
    dates: Array<string> | {endDate:Timestamp,startDate:Timestamp} | Timestamp;
    language:ILanguage;
    odiseaID:string;
}

enum caledarType{
    frequencyDatesCalendar = "frequencyDatesCalendar",
    multiplesDatesCalendar = "multiplesDatesCalendar",
    rangeDatesCalendar = "rangeDatesCalendar",
    singleDateCalendar = "singleDateCalendar",
}
