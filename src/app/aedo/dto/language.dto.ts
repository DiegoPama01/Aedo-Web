import { Language } from '../models/language.model';

export class LanguageDto {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getLanguage(): Language {
    return new Language(this.name);
  }
}

