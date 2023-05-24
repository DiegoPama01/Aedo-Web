import { Comment } from "../models/comment.model";

/**
 * CommentDto represents a data transfer object for a comment.
 * It contains various properties related to a comment.
 */
export class CommentDto {
  private id: string;
  private body: string;
  private odiseaId: string;
  private rating: number;
  private reservationId: string;
  private userId: string;
  private username: string;

  /**
   * Constructs a new CommentDto object.
   * @param id The id of the comment.
   * @param body The body of the comment.
   * @param odiseaId The id of the related odisea.
   * @param rating The rating given to the odisea.
   * @param reservationId The id of the related reservation.
   * @param userId The id of the user who made the comment.
   * @param username The username of the user who made the comment.
   */
  constructor(
    id: string,
    body: string,
    odiseaId: string,
    rating: number,
    reservationId: string,
    userId: string,
    username: string
  ) {
    this.id = id;
    this.body = body;
    this.odiseaId = odiseaId;
    this.rating = rating;
    this.reservationId = reservationId;
    this.userId = userId;
    this.username = username;
  }

  /**
   * Gets the id of the comment.
   * @returns The id of the comment.
   */
  public getId(): string {
    return this.id;
  }

  /**
   * Gets the body of the comment.
   * @returns The body of the comment.
   */
  public getBody(): string {
    return this.body;
  }

  /**
   * Sets the body of the comment.
   * @param body The new body for the comment.
   */
  public setBody(body: string): void {
    this.body = body;
  }

  /**
   * Gets the id of the related odisea.
   * @returns The id of the related odisea.
   */
  public getOdiseaId(): string {
    return this.odiseaId;
  }

  /**
   * Sets the id of the related odisea.
   * @param odiseaId The new id for the related odisea.
   */
  public setOdiseaId(odiseaId: string): void {
    this.odiseaId = odiseaId;
  }

  /**
   * Gets the rating given to the odisea.
   * @returns The rating of the odisea.
   */
  public getRating(): number {
    return this.rating;
  }

  /**
   * Sets the rating given to the odisea.
   * @param rating The new rating for the odisea.
   */
  public setRating(rating: number): void {
    this.rating = rating;
  }

  /**
   * Gets the id of the related reservation.
   * @returns The id of the related reservation.
   */
  public getReservationId(): string {
    return this.reservationId;
  }

  /**
   * Sets the id of the related reservation.
   * @param reservationId The new id for the related reservation.
   */
  public setReservationId(reservationId: string): void {
    this.reservationId = reservationId;
  }

  /**
   * Gets the id of the user who made the comment.
   * @returns The id of the user who made the comment.
   */
  public getUserId(): string {
    return this.userId;
  }

  /**
   * Sets the id of the user who made the comment.
   * @param userId The new id for the user who made the comment.
   */
  public setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Gets the username of the user who made the comment.
   * @returns The username of the user who made the comment.
   */
  public getUsername(): string {
    return this.username;
  }

  /**
   * Sets the username of the user who made the comment.
   * @param username The new username for the user who made the comment.
   */
  public setUsername(username: string): void {
    this.username = username;
  }

  /**
   * Converts the CommentDto object to a Comment object.
   * @returns A new Comment object with the same properties as the CommentDto.
   */
  public getComment(): Comment {
    return new Comment(
      this.body,
      this.odiseaId,
      this.rating,
      this.reservationId,
      this.userId,
      this.username
    );
  }
}
