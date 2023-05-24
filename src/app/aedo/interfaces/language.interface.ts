/**
 * Represents a language.
 * @interface
 */
export interface ILanguage {
  /** The ID of the language. */
  id: string;
  /** The name of the language. */
  item: string;

  /**
   * Converts the language to a JSON object.
   * @returns {any} The JSON representation of the language.
   */
  toJSON(): any;
}
