import { IOdiseo } from "../interfaces/odiseo.interface";


export class Odiseo implements IOdiseo {
    accountNumber:string;
    email: string;
    isAedo:boolean;
    name: string;
    phoneNumber:string;
    userName: string;
    birthDate: Date;
    isAdmin:boolean;
    isEducative:boolean;
    avatar: any;

  constructor(
    accountNumber:string,
    email: string,
    isAedo:boolean,
    name: string,
    phoneNumber:string,
    userName: string,
    birthDate: Date,
    avatar:any
  ) {
    this.accountNumber = accountNumber;
    this.email = email;
    this.isAedo = isAedo;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.userName = userName;
    this.birthDate = birthDate;
    this.isAdmin = false;
    this.isEducative = false;
    this.avatar = avatar;
  }

  toJSON() {
    return {
      accountNumber: this.accountNumber,
      email: this.email,
      isAedo: this.isAedo,
      name: this.name,
      phoneNumber: this.phoneNumber,
      userName: this.userName,
      birthDate: this.birthDate.toISOString(),
      isAdmin: this.isAdmin,
      isEducative: this.isEducative,
      avatar: this.avatar
    };
  }
}