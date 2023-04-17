import { IOdiseo } from "../interfaces/odiseo.interface";


export class Odiseo implements IOdiseo {
    id:string;
    accountNumber:string;
    email: string;
    isAedo:boolean;
    name: string;
    phoneNumber:string;
    userName: string;
    birthDate: Date;

  constructor(
    id: string,
    accountNumber:string,
    email: string,
    isAedo:boolean,
    name: string,
    phoneNumber:string,
    userName: string,
    birthDate: Date,
  ) {
    this.id = id;
    this.accountNumber = accountNumber;
    this.email = email;
    this.isAedo = isAedo;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.userName = userName;
    this.birthDate = birthDate;
  }
}