import { ILanguage } from '../interfaces/language.interface';
import { IOdisea } from '../interfaces/odisea.interface';

/**
 * Represents an Odisea.
 */
export class Odisea implements IOdisea {
  /**
   * The description of the Odisea.
   */
  description: string;

  /**
   * The images of the Odisea.
   */
  images: any[];

  /**
   * The languages available for the Odisea.
   */
  languages: Array<ILanguage>;

  /**
   * The maximum capacity of the Odisea.
   */
  maxCapacity: number;

  /**
   * The name of the Odisea.
   */
  name: string;

  /**
   * The number of votes received for the Odisea.
   */
  numberVotes: number;

  /**
   * The total score of votes received for the Odisea.
   */
  totalScoreVotes: number;

  /**
   * The unique ID of the Odisea.
   */
  uid: string;

  /**
   * The tags associated with the Odisea.
   */
  tags: Array<string>;

  /**
   * The location of the Odisea.
   */
  location: any;

  /**
   * The price of the Odisea.
   */
  price: number;

  /**
   * Creates an instance of the Odisea class.
   * @param description - The description of the Odisea.
   * @param image - The images of the Odisea.
   * @param languages - The languages available for the Odisea.
   * @param maxCapacity - The maximum capacity of the Odisea.
   * @param name - The name of the Odisea.
   * @param numberVotes - The number of votes received for the Odisea.
   * @param totalScoreVotes - The total score of votes received for the Odisea.
   * @param uid - The unique ID of the Odisea.
   * @param tags - The tags associated with the Odisea.
   * @param location - The location of the Odisea.
   * @param price - The price of the Odisea.
   */
  constructor(
    description: string,
    image: any,
    languages: Array<ILanguage>,
    maxCapacity: number,
    name: string,
    numberVotes: number,
    totalScoreVotes: number,
    uid: string,
    tags: Array<string>,
    location: any,
    price: number
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
    this.price = price;
  }

  /**
   * Converts the Odisea object to JSON format.
   * @returns The Odisea object in JSON format.
   */
  toJSON() {
    const jsonResult = this.languages.map((language) => {
      return {
        id: language.id,
        item: language.item
      };
    });

    return {
      description: this.description,
      images: this.images,
      languages: jsonResult,
      maxCapacity: this.maxCapacity,
      name: this.name,
      numberVotes: this.numberVotes,
      totalScoreVotes: this.totalScoreVotes,
      uid: this.uid,
      tags: this.tags,
      location: this.location,
      price: this.price,
    };
  }
}
