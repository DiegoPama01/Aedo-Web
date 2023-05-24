import { ILanguage } from '../interfaces/language.interface';

/**
 * Represents a language.
 */
export class Language implements ILanguage {
  /**
   * The ID of the language.
   */
  id: string;

  /**
   * The language item.
   */
  item: string;

  /**
   * Creates an instance of the Language class.
   * @param id - The ID of the language.
   * @param item - The language item.
   */
  constructor(id: string, item: string) {
    this.id = id;
    this.item = item;
  }

  /**
   * Converts the Language object to JSON format.
   * @returns The Language object in JSON format.
   */
  toJSON() {
    return {
      item: this.item,
    };
  }
}
