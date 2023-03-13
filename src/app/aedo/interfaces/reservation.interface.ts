import { ILanguage } from "./language.interface";

export interface IReservation {
    id:string;
    language:ILanguage;
    odiseaDateID:string;
    userID:string;
}
