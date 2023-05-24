import { Category } from '../models/category.model';

/**
 * CategoryDto represents a data transfer object for a category.
 * It contains the id and name of the category.
 */
export class CategoryDto {
  private id: string;
  private name: string;

  /**
   * Constructs a new CategoryDto object.
   * @param id The id of the category.
   * @param name The name of the category.
   */
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  /**
   * Gets the id of the category.
   * @returns The id of the category.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the name of the category.
   * @returns The name of the category.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Sets the name of the category.
   * @param name The new name for the category.
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Converts the CategoryDto object to a Category object.
   * @returns A new Category object with the same name as the CategoryDto.
   */
  public getCategory(): Category {
    return new Category(this.name);
  }
}
