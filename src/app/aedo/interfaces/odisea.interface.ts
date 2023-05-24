import { ILanguage } from './language.interface';

export interface IOdisea {
  /** The description of the Odisea. */
  description: string;
  /** The images of the Odisea. */
  images: any[];
  /** The languages available for the Odisea. */
  languages: Array<ILanguage>;
  /** The maximum capacity of the Odisea. */
  maxCapacity: number;
  /** The name of the Odisea. */
  name: string;
  /** The number of votes for the Odisea. */
  numberVotes: number;
  /** The total score of votes for the Odisea. */
  totalScoreVotes: number;
  /** The UID of the Odisea. */
  uid: string;
  /** The tags associated with the Odisea. */
  tags: Array<string>;
  /** The price of the Odisea. */
  price: number;

  /**
   * Converts the Odisea to a JSON object.
   * @returns {any} The JSON representation of the Odisea.
   */
  toJSON(): any;
}
