import { ILanguage } from "./language.interface";

export interface IReservation {
    language:ILanguage;
    odiseaDateId:string;
    userId:string;
    userReservations: number;

    toJSON():any
}
