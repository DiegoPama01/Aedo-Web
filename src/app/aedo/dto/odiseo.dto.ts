import { Odiseo } from '../models/odiseo.model';
/**
 * Represents an Odiseo Data Transfer Object (DTO).
 * It contains information about an Odiseo user.
 */
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

  /**
   * Creates an instance of OdiseoDto.
   * @param id - The unique identifier of the Odiseo user.
   * @param accountNumber - The account number of the Odiseo user.
   * @param avatar - The avatar of the Odiseo user.
   * @param birthDate - The birth date of the Odiseo user.
   * @param email - The email address of the Odiseo user.
   * @param isAdmin - Indicates if the Odiseo user is an admin.
   * @param isAedo - Indicates if the Odiseo user is an Aedo.
   * @param isEducative - Indicates if the Odiseo user is educative.
   * @param name - The name of the Odiseo user.
   * @param phoneNumber - The phone number of the Odiseo user.
   * @param userName - The username of the Odiseo user.
   */
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

  /**
   * Gets the unique identifier of the Odiseo user.
   * @returns The id of the Odiseo user.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the account number of the Odiseo user.
   * @returns The account number of the Odiseo user.
   */
  public getAccountNumber(): string {
    return this.accountNumber;
  }

  /**
   * Sets the account number of the Odiseo user.
   * @param accountNumber - The account number to set.
   */
  public setAccountNumber(accountNumber: string): void {
    this.accountNumber = accountNumber;
  }

  /**
   * Gets the avatar of the Odiseo user.
   * @returns The avatar of the Odiseo user.
   */
  public getAvatar(): any {
    return this.avatar;
  }

  /**
   * Sets the avatar of the Odiseo user.
   * @param avatar - The avatar to set.
   */
  public setAvatar(avatar: any): void {
    this.avatar = avatar;
  }

  /**
   * Gets the birth date of the Odiseo user.
   * @returns The birth date of the Odiseo user.
   */
  public getBirthDate(): any {
    return this.birthDate;
  }

  /**
   * Sets the birth date of the Odiseo user.
   * @param birthDate - The birth date to set.
   */
  public setBirthDate(birthDate: any): void {
    this.birthDate = birthDate;
  }

  /**
   * Gets the email address of the Odiseo user.
   * @returns The email address of the Odiseo user.
   */
  public getEmail(): string {
    return this.email;
  }

  /**
   * Sets the email address of the Odiseo user.
   * @param email - The email address to set.
   */
  public setEmail(email: string): void {
    this.email = email;
  }

  /**
   * Gets a boolean indicating if the Odiseo user is an admin.
   * @returns True if the Odiseo user is an admin, false otherwise.
   */
  public getIsAdmin(): boolean {
    return this.isAdmin;
  }

  /**
   * Sets a boolean indicating if the Odiseo user is an admin.
   * @param isAdmin - The value to set.
   */
  public setIsAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  /**
   * Gets a boolean indicating if the Odiseo user is an Aedo.
   * @returns True if the Odiseo user is an Aedo, false otherwise.
   */
  public getIsAedo(): boolean {
    return this.isAedo;
  }

  /**
   * Sets a boolean indicating if the Odiseo user is an Aedo.
   * @param isAedo - The value to set.
   */
  public setIsAedo(isAedo: boolean): void {
    this.isAedo = isAedo;
  }

  /**
   * Gets a boolean indicating if the Odiseo user is educative.
   * @returns True if the Odiseo user is educative, false otherwise.
   */
  public getIsEducative(): boolean {
    return this.isEducative;
  }

  /**
   * Sets a boolean indicating if the Odiseo user is educative.
   * @param isEducative - The value to set.
   */
  public setIsEducative(isEducative: boolean): void {
    this.isEducative = isEducative;
  }

  /**
   * Gets the name of the Odiseo user.
   * @returns The name of the Odiseo user.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Sets the name of the Odiseo user.
   * @param name - The name to set.
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Gets the phone number of the Odiseo user.
   * @returns The phone number of the Odiseo user.
   */
  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  /**
   * Sets the phone number of the Odiseo user.
   * @param phoneNumber - The phone number to set.
   */
  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  /**
   * Gets the username of the Odiseo user.
   * @returns The username of the Odiseo user.
   */
  public getUserName(): string {
    return this.userName;
  }

  /**
   * Sets the username of the Odiseo user.
   * @param userName - The username to set.
   */
  public setUserName(userName: string): void {
    this.userName = userName;
  }

  /**
   * Gets the Odiseo object associated with the OdiseoDto.
   * @returns The Odiseo object.
   */
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
