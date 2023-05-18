import { Language } from '../models/language.model';

export class LanguageDto {
  private id: string;
  private item: string;

  constructor(id: string, item: string) {
    this.id = id;
    this.item = item;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getItem(): string {
    return this.item;
  }

  public setItem(item: string): void {
    this.item = item;
  }

  public getLanguage(): Language {
    return new Language(this.id,this.item);
  }
}

