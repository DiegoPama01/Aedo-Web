import { ILanguage } from '../interfaces/language.interface';

export class Language implements ILanguage {
  item: string;

  constructor(item: string) {
    this.item = item;
  }
}
