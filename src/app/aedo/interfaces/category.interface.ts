/**
 * Represents a category.
 * @interface
 */
export interface ICategory {
  /** The name of the category. */
  name: string;

  /**
   * Converts the category to a JSON object.
   * @returns {any} The JSON representation of the category.
   */
  toJSON(): any;
}
