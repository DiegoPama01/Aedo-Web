import { Timestamp } from "@angular/fire/firestore";

export interface IRecord {
    id:string;
    lastModified:Timestamp;
    userID:string;
    data:any;
}
