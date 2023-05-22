import { Timestamp } from "@angular/fire/firestore";

export interface IRecord {
    lastModified:Timestamp;
    userID:string;
    data:any;

    toJSON():any
}
