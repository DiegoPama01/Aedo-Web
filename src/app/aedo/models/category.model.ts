import { ICategory } from '../interfaces/category.interface';

export class Category implements ICategory {
  id: string;
  name: string;

  constructor(id: string, item: string) {
    this.id = id;
    this.name = item;
  }
}
