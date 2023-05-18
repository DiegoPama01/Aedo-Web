import { ILanguage } from "../interfaces/language.interface";
import { IOdisea } from "../interfaces/odisea.interface";


export class Odisea implements IOdisea {
    description:string;
    image: any;
    languages: Array<ILanguage>
    maxCapacity: number;
    name: string;
    numberVotes:number;
    totalScoreVotes:number;
    uid:string;
    tags:Array<string>;

  constructor(
    description:string,
    image: any,
    languages: Array<ILanguage>,
    maxCapacity: number,
    name: string,
    numberVotes:number,
    totalScoreVotes:number,
    uid:string,
    tags:Array<string>
  ) {
    this.description = description;
    this.image = image;
    this.languages = languages;
    this.maxCapacity = maxCapacity;
    this.name = name;
    this.numberVotes = numberVotes;
    this.totalScoreVotes = totalScoreVotes;
    this.uid = uid;
    this.tags = tags;
  }
}
