import { ILanguage } from "../interfaces/language.interface";
import { IOdisea } from "../interfaces/odisea.interface";


export class Odisea implements IOdisea {
    description:string;
    images: any[];
    languages: Array<ILanguage>
    maxCapacity: number;
    name: string;
    numberVotes:number;
    totalScoreVotes:number;
    uid:string;
    tags:Array<string>;
    location:any

  constructor(
    description:string,
    image: any,
    languages: Array<ILanguage>,
    maxCapacity: number,
    name: string,
    numberVotes:number,
    totalScoreVotes:number,
    uid:string,
    tags:Array<string>,
    location:any
  ) {
    this.description = description;
    this.images = image;
    this.languages = languages;
    this.maxCapacity = maxCapacity;
    this.name = name;
    this.numberVotes = numberVotes;
    this.totalScoreVotes = totalScoreVotes;
    this.uid = uid;
    this.tags = tags;
    this.location = location;
  }

  toJSON() {
    return {
      description: this.description,
      images: this.images,
      languages: this.languages.map((language) => language.toJSON()),
      maxCapacity: this.maxCapacity,
      name: this.name,
      numberVotes: this.numberVotes,
      totalScoreVotes: this.totalScoreVotes,
      uid: this.uid,
      tags: this.tags,
      location: this.location
    };
  }
}
