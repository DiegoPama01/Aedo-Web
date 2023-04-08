import { Category } from '../models/category.model';

export class CategoryDto {
  id: string;
  category: Category;

  constructor(id: string, category: Category) {
    this.id = id;
    this.category = category;
  }

  public getId(): string {
    return this.id;
  }

  public getCategory(): Category {
    return this.category;
  }
}
