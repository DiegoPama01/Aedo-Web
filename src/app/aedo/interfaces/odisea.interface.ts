import { ILanguage } from "./language.interface";

export interface IOdisea {
    description:string;
    images: any[];
    languages: Array<ILanguage>
    maxCapacity: number;
    name: string;
    numberVotes:number;
    totalScoreVotes:number;
    uid:string;
    tags:Array<string>;
    price: number;

    toJSON():any
}


