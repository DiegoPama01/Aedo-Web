import { ILanguage } from "../interfaces/language.interface";

export class Language implements ILanguage{
    id: string;
    item: string;

    constructor(id:string,item:string){
        this.id = id;
        this.item = item;
    }
}
