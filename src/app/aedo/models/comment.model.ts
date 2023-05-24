import { IComment } from "../interfaces/comment.interface";


/**
 * Represents a comment.
 */
export class Comment implements IComment {
  /**
   * The body of the comment.
   */
  body: string;

  /**
   * The ID of the Odisea associated with the comment.
   */
  odiseaId: string;

  /**
   * The rating of the comment.
   */
  rating: number;

  /**
   * The ID of the reservation associated with the comment.
   */
  reservationId: string;

  /**
   * The ID of the user who made the comment.
   */
  userId: string;

  /**
   * The username of the user who made the comment.
   */
  username: string;

  /**
   * Creates an instance of the Comment class.
   * @param body - The body of the comment.
   * @param odiseaId - The ID of the Odisea associated with the comment.
   * @param rating - The rating of the comment.
   * @param reservationId - The ID of the reservation associated with the comment.
   * @param userId - The ID of the user who made the comment.
   * @param username - The username of the user who made the comment.
   */
  constructor(
    body: string,
    odiseaId: string,
    rating: number,
    reservationId: string,
    userId: string,
    username: string
  ) {
    this.body = body;
    this.odiseaId = odiseaId;
    this.rating = rating;
    this.reservationId = reservationId;
    this.userId = userId;
    this.username = username;
  }

  /**
   * Converts the Comment object to JSON format.
   * @returns The Comment object in JSON format.
   */
  toJSON() {
    return {
      body: this.body,
      odiseaID: this.odiseaId,
      rating: this.rating,
      reservationID: this.reservationId,
      userID: this.userId,
      username: this.username,
    };
  }
}

