import { Comment } from '../models/comment.model';

export class CommentDto {
  private id: string;
  private body: string;
  private odiseaId: string;
  private rating: number;
  private reservationId: string;
  private userId: string;
  private username: string;

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

  public getId(): string {
    return this.id;
  }

  public getBody(): string {
    return this.body;
  }

  public setBody(body: string): void {
    this.body = body;
  }

  public getOdiseaId(): string {
    return this.odiseaId;
  }

  public setOdiseaId(odiseaId: string): void {
    this.odiseaId = odiseaId;
  }

  public getRating(): number {
    return this.rating;
  }

  public setRating(rating: number): void {
    this.rating = rating;
  }

  public getReservationId(): string {
    return this.reservationId;
  }

  public setReservationId(reservationId: string): void {
    this.reservationId = reservationId;
  }

  public getUserId(): string {
    return this.userId;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getUsername(): string {
    return this.username;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

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
