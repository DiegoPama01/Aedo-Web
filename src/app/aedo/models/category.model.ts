import { ICategory } from '../interfaces/category.interface';

/**
 * Represents a category.
 */
export class Category implements ICategory {
  /**
   * The name of the category.
   */
  name: string;

  /**
   * Creates an instance of the Category class.
   * @param item - The name of the category.
   */
  constructor(item: string) {
    this.name = item;
  }

  /**
   * Gets the name of the category.
   * @returns The name of the category.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Converts the Category object to JSON format.
   * @returns The Category object in JSON format.
   */
  toJSON() {
    return {
      name: this.name,
    };
  }
}
