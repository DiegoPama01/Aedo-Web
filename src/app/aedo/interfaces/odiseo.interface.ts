/**
 * Represents an Odiseo.
 * @interface
 */
export interface IOdiseo {
  /** The account number of the Odiseo. */
  accountNumber: string;
  /** The avatar of the Odiseo. */
  avatar: any;
  /** The birth date of the Odiseo. */
  birthDate: any;
  /** The email of the Odiseo. */
  email: string;
  /** Indicates if the Odiseo is an admin. */
  isAdmin: boolean;
  /** Indicates if the Odiseo is an Aedo. */
  isAedo: boolean;
  /** Indicates if the Odiseo is educative. */
  isEducative: boolean;
  /** The name of the Odiseo. */
  name: string;
  /** The phone number of the Odiseo. */
  phoneNumber: string;
  /** The username of the Odiseo. */
  userName: string;

  /**
   * Converts the Odiseo to a JSON object.
   * @returns {any} The JSON representation of the Odiseo.
   */
  toJSON(): any;
}
