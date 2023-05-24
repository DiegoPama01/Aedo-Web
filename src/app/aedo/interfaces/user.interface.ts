/**
 * Represents a user.
 * @interface
 */
export interface IUser {
  /** The username of the user. */
  username: string;
  /** The email of the user. */
  email: string;

  /**
   * Converts the user to a JSON object.
   * @returns {any} The JSON representation of the user.
   */
  toJSON(): any;
}
