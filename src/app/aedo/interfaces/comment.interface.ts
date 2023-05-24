/**
 * Represents a comment.
 * @interface
 */
export interface IComment {
  /** The body of the comment. */
  body: string;
  /** The ID of the odisea associated with the comment. */
  odiseaId: string;
  /** The rating of the comment. */
  rating: number;
  /** The ID of the reservation associated with the comment. */
  reservationId: string;
  /** The ID of the user who made the comment. */
  userId: string;
  /** The username of the user who made the comment. */
  username: string;

  /**
   * Converts the comment to a JSON object.
   * @returns {any} The JSON representation of the comment.
   */
  toJSON(): any;
}
