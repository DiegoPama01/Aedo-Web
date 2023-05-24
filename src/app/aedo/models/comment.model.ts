import { IComment } from "../interfaces/comment.interface";


export class Comment implements IComment {
  body:string;
  odiseaId:string;
  rating: number;
  reservationId:string;
  userId:string;
  username:string;

  constructor(body: string, odiseaId:string,rating:number,reservationID:string,userID:string,username:string) {
    this.body = body;
    this.odiseaId = odiseaId;
    this.rating = rating;
    this.reservationId=reservationID;
    this.userId = userID;
    this.username = username;
  }

  toJSON() {
    return {
      body: this.body,
      odiseaID: this.odiseaId,
      rating: this.rating,
      reservationID: this.reservationId,
      userID: this.userId,
      username: this.username
    };
  }
}
