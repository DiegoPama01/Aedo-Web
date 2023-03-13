import { ILanguage } from "./language.interface";

export interface IOdisea {
    id:string;
    description:string;
    image: any;
    languages: Array<ILanguage>
    maxCapacity: number;
    name: string;
    numberVotes:number;
    totalScoreVotes:number;
    uid:string;
    tags:Array<string>;
}


