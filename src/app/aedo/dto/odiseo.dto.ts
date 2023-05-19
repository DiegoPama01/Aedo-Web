import { Odiseo } from '../models/odiseo.model';

export class OdiseoDto {
  private id: string;
  private accountNumber: string;
  private avatar: any;
  private birthDate: any;
  private email: string;
  private isAdmin: boolean;
  private isAedo: boolean;
  private isEducative: boolean;
  private name: string;
  private phoneNumber: string;
  private userName: string;

  constructor(
    id: string,
    accountNumber: string,
    avatar: any,
    birthDate: any,
    email: string,
    isAdmin: boolean,
    isAedo: boolean,
    isEducative: boolean,
    name: string,
    phoneNumber: string,
    userName: string
  ) {
    this.id = id;
    this.accountNumber = accountNumber;
    this.avatar = avatar;
    this.birthDate = birthDate;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isAedo = isAedo;
    this.isEducative = isEducative;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.userName = userName;
  }

  public getId(): string {
    return this.id;
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }

  public setAccountNumber(accountNumber: string): void {
    this.accountNumber = accountNumber;
  }

  public getAvatar(): any {
    return this.avatar;
  }

  public setAvatar(avatar: any): void {
    this.avatar = avatar;
  }

  public getBirthDate(): any {
    return this.birthDate;
  }

  public setBirthDate(birthDate: any): void {
    this.birthDate = birthDate;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getIsAdmin(): boolean {
    return this.isAdmin;
  }

  public setIsAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  public getIsAedo(): boolean {
    return this.isAedo;
  }

  public setIsAedo(isAedo: boolean): void {
    this.isAedo = isAedo;
  }

  public getIsEducative(): boolean {
    return this.isEducative;
  }

  public setIsEducative(isEducative: boolean): void {
    this.isEducative = isEducative;
  }

  getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(userName: string): void {
    this.userName = userName;
  }

  public getOdiseo(): Odiseo {
    return new Odiseo(
      this.accountNumber,
      this.email,
      this.isAedo,
      this.name,
      this.phoneNumber,
      this.userName,
      this.birthDate,
      this.avatar
    );
  }
}
