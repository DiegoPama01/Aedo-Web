import { Odisea } from '../models/odisea.model';
import { ILanguage } from '../interfaces/language.interface';

type LanguageArray = Array<ILanguage>;
/**
 * OdiseaDto represents a data transfer object for Odisea.
 * It contains the properties related to an Odisea.
 */
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
  private location: any;
  private price: number;

  /**
   * Constructs a new OdiseaDto object.
   * @param id The id of the Odisea.
   * @param description The description of the Odisea.
   * @param image The images associated with the Odisea.
   * @param languages The languages available for the Odisea.
   * @param maxCapacity The maximum capacity for the Odisea.
   * @param name The name of the Odisea.
   * @param numberVotes The number of votes received by the Odisea.
   * @param totalScoreVotes The total score of votes received by the Odisea.
   * @param uid The unique id of the Odisea.
   * @param tags The tags associated with the Odisea.
   * @param location The location of the Odisea.
   * @param price The price of the Odisea.
   */
  constructor(
    id: string,
    description: string,
    image: any[],
    languages: LanguageArray,
    maxCapacity: number,
    name: string,
    numberVotes: number,
    totalScoreVotes: number,
    uid: string,
    tags: string[],
    location: any,
    price: number
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
    this.price = price;
  }

  /**
   * Gets the id of the Odisea.
   * @returns The id of the Odisea.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the price of the Odisea.
   * @returns The price of the Odisea.
   */
  public getPrice(): number {
    return this.price;
  }

  /**
   * Sets the price of the Odisea.
   * @param price The new price for the Odisea.
   */
  public setPrice(price: number): void {
    this.price = price;
  }

  /**
   * Gets the location of the Odisea.
   * @returns The location of the Odisea.
   */
  public getLocation(): any {
    return this.location;
  }

  /**
   * Gets the description of the Odisea.
   * @returns The description of the Odisea.
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * Sets the description of the Odisea.
   * @param description The new description for the Odisea.
   */
  public setDescription(description: string): void {
    this.description = description;
  }

  /**
   * Gets the images associated with the Odisea.
   * @returns The images associated with the Odisea.
   */
  public getImage(): any[] {
    return this.image;
  }

  /**
   * Sets the images associated with the Odisea.
   * @param image The new images for the Odisea.
   */
  public setImage(image: any[]): void {
    this.image = image;
  }

  /**
   * Gets the languages available for the Odisea.
   * @returns The languages available for the Odisea.
   */
  public getLanguages(): LanguageArray {
    return this.languages;
  }

  /**
   * Sets the languages available for the Odisea.
   * @param languages The new languages for the Odisea.
   */
  public setLanguages(languages: LanguageArray): void {
    this.languages = languages;
  }

  /**
   * Gets the maximum capacity for the Odisea.
   * @returns The maximum capacity for the Odisea.
   */
  public getMaxCapacity(): number {
    return this.maxCapacity;
  }

  /**
   * Sets the maximum capacity for the Odisea.
   * @param maxCapacity The new maximum capacity for the Odisea.
   */
  public setMaxCapacity(maxCapacity: number): void {
    this.maxCapacity = maxCapacity;
  }

  /**
   * Gets the name of the Odisea.
   * @returns The name of the Odisea.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Sets the name of the Odisea.
   * @param name The new name for the Odisea.
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Gets the number of votes received by the Odisea.
   * @returns The number of votes received by the Odisea.
   */
  public getNumberVotes(): number {
    return this.numberVotes;
  }

  /**
   * Sets the number of votes received by the Odisea.
   * @param numberVotes The new number of votes for the Odisea.
   */
  public setNumberVotes(numberVotes: number): void {
    this.numberVotes = numberVotes;
  }

  /**
   * Gets the total score of votes received by the Odisea.
   * @returns The total score of votes received by the Odisea.
   */
  public getTotalScoreVotes(): number {
    return this.totalScoreVotes;
  }

  /**
   * Sets the total score of votes received by the Odisea.
   * @param totalScoreVotes The new total score of votes for the Odisea.
   */
  public setTotalScoreVotes(totalScoreVotes: number): void {
    this.totalScoreVotes = totalScoreVotes;
  }

  /**
   * Gets the unique id of the Odisea.
   * @returns The unique id of the Odisea.
   */
  public getUid(): string {
    return this.uid;
  }

  /**
   * Sets the unique id of the Odisea.
   * @param uid The new unique id for the Odisea.
   */
  public setUid(uid: string): void {
    this.uid = uid;
  }

  /**
   * Gets the tags associated with the Odisea.
   * @returns The tags associated with the Odisea.
   */
  public getTags(): string[] {
    return this.tags;
  }

  /**
   * Sets the tags associated with the Odisea.
   * @param tags The new tags for the Odisea.
   */
  public setTags(tags: string[]): void {
    this.tags = tags;
  }

  /**
   * Converts the OdiseaDto object to an instance of Odisea.
   * @returns An instance of Odisea based on the OdiseaDto properties.
   */
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
      this.location,
      this.price
    );
  }
}
