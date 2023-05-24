import { Timestamp } from "@angular/fire/firestore";

export interface IRecord {
    lastModified:Timestamp;
    userId:string;
    data:any;

    toJSON():any
}
