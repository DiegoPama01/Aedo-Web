import { ICategory } from '../interfaces/category.interface';

export class Category implements ICategory {
  name: string;

  constructor(item: string) {
    this.name = item;
  }

  public getName(): string {
    return this.name;
  }

  toJSON(){
    return {
      name: this.name
    }
  }
}
