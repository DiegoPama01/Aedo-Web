import { Language } from '../models/language.model';

/**
 * LanguageDto represents a data transfer object for a language.
 * It contains the properties related to a language.
 */
export class LanguageDto {
  private id: string;
  private item: string;

  /**
   * Constructs a new LanguageDto object.
   * @param id The id of the language.
   * @param item The language item.
   */
  constructor(id: string, item: string) {
    this.id = id;
    this.item = item;
  }

  /**
   * Gets the id of the language.
   * @returns The id of the language.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Sets the id of the language.
   * @param id The new id for the language.
   */
  public setId(id: string): void {
    this.id = id;
  }

  /**
   * Gets the language item.
   * @returns The language item.
   */
  public getItem(): string {
    return this.item;
  }

  /**
   * Sets the language item.
   * @param item The new language item.
   */
  public setItem(item: string): void {
    this.item = item;
  }

  /**
   * Converts the LanguageDto object to a Language object.
   * @returns A new Language object with the same properties as the LanguageDto.
   */
  public getLanguage(): Language {
    return new Language(this.id, this.item);
  }
}
