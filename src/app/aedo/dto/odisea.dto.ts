import { Odisea } from '../models/odisea.model';
import { ILanguage } from '../interfaces/language.interface';

type LanguageArray = Array<ILanguage>;

export class OdiseaDto {
  private id: string;
  private description: string;
  private image: any[];
  private languages: LanguageArray;
  private maxCapacity: number;
  private name: string;
  private numberVotes: number;
  private totalScoreVotes: number;
  private uid: string;
  private tags: Array<string>;
  private location: any

  constructor(
    id: string,
    description: string,
    image: any,
    languages: LanguageArray,
    maxCapacity: number,
    name: string,
    numberVotes: number,
    totalScoreVotes: number,
    uid: string,
    tags: Array<string>,
    location:any
  ) {
    this.id = id;
    this.description = description;
    this.image = image;
    this.languages = languages;
    this.maxCapacity = maxCapacity;
    this.name = name;
    this.numberVotes = numberVotes;
    this.totalScoreVotes = totalScoreVotes;
    this.uid = uid;
    this.tags = tags;
    this.location = location;
  }

  public getId(): string {
    return this.id;
  }

  public getLocation(): any {
    return this.location;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getImage(): any[] {
    return this.image;
  }

  public setImage(image: any[]): void {
    this.image = image;
  }

  public getLanguages(): Array<ILanguage> {
    return this.languages;
  }

  public setLanguages(languages: Array<ILanguage>): void {
    this.languages = languages;
  }

  public getMaxCapacity(): number {
    return this.maxCapacity;
  }

  public setMaxCapacity(maxCapacity: number): void {
    this.maxCapacity = maxCapacity;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getNumberVotes(): number {
    return this.numberVotes;
  }

  public setNumberVotes(numberVotes: number): void {
    this.numberVotes = numberVotes;
  }

  public getTotalScoreVotes(): number {
    return this.totalScoreVotes;
  }

  public setTotalScoreVotes(totalScoreVotes: number): void {
    this.totalScoreVotes = totalScoreVotes;
  }

  public getUid(): string {
    return this.uid;
  }

  public setUid(uid: string): void {
    this.uid = uid;
  }

  public getTags(): Array<string> {
    return this.tags;
  }

  public setTags(tags: Array<string>): void {
    this.tags = tags;
  }

  public getOdisea(): Odisea {
    return new Odisea(
      this.description,
      this.image,
      this.languages,
      this.maxCapacity,
      this.name,
      this.numberVotes,
      this.totalScoreVotes,
      this.uid,
      this.tags,
      this.location
    );
  }
}
