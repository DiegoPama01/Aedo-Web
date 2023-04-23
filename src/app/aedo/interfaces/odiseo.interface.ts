import { Timestamp } from "@angular/fire/firestore";

export interface IOdiseo{
    id:string;
    accountNumber:string;
    avatar:any;
    birthDate: any;
    email: string;
    isAdmin:boolean;
    isAedo:boolean;
    isEducative:boolean;
    name: string;
    phoneNumber:string;
    userName: string;
}