import { IOdiseo } from "../interfaces/odiseo.interface";


/**
 * Represents an Odiseo.
 */
export class Odiseo implements IOdiseo {
  /**
   * The account number of the Odiseo.
   */
  accountNumber: string;

  /**
   * The email address of the Odiseo.
   */
  email: string;

  /**
   * Indicates if the Odiseo is an Aedo.
   */
  isAedo: boolean;

  /**
   * The name of the Odiseo.
   */
  name: string;

  /**
   * The phone number of the Odiseo.
   */
  phoneNumber: string;

  /**
   * The username of the Odiseo.
   */
  userName: string;

  /**
   * The birth date of the Odiseo.
   */
  birthDate: Date;

  /**
   * Indicates if the Odiseo is an admin.
   */
  isAdmin: boolean;

  /**
   * Indicates if the Odiseo is educative.
   */
  isEducative: boolean;

  /**
   * The avatar of the Odiseo.
   */
  avatar: any;

  /**
   * Creates an instance of the Odiseo class.
   * @param accountNumber - The account number of the Odiseo.
   * @param email - The email address of the Odiseo.
   * @param isAedo - Indicates if the Odiseo is an Aedo.
   * @param name - The name of the Odiseo.
   * @param phoneNumber - The phone number of the Odiseo.
   * @param userName - The username of the Odiseo.
   * @param birthDate - The birth date of the Odiseo.
   * @param avatar - The avatar of the Odiseo.
   */
  constructor(
    accountNumber: string,
    email: string,
    isAedo: boolean,
    name: string,
    phoneNumber: string,
    userName: string,
    birthDate: Date,
    avatar: any,
    isAdmin: boolean,
    isEducative: boolean
  ) {
    this.accountNumber = accountNumber;
    this.email = email;
    this.isAedo = isAedo;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.userName = userName;
    this.birthDate = birthDate;
    this.isAdmin = isAdmin;
    this.isEducative = isEducative;
    this.avatar = avatar;
  }

  /**
   * Converts the Odiseo object to JSON format.
   * @returns The Odiseo object in JSON format.
   */
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
      avatar: this.avatar,
    };
  }
}
