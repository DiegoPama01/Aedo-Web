import { ILanguage } from "./language.interface";

export interface IReservation {
    language:ILanguage;
    odiseaDateID:string;
    userID:string;
}
