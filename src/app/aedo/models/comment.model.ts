import { IComment } from "../interfaces/comment.interface";


export class Comment implements IComment {
  body:string;
  odiseaId:string;
  rating: number;
  reservationID:string;
  userID:string;
  username:string;

  constructor(body: string, odiseaId:string,rating:number,reservationID:string,userID:string,username:string) {
    this.body = body;
    this.odiseaId = odiseaId;
    this.rating = rating;
    this.reservationID=reservationID;
    this.userID = userID;
    this.username = username;
  }

  toJSON() {
    return {
      body: this.body,
      odiseaId: this.odiseaId,
      rating: this.rating,
      reservationID: this.reservationID,
      userID: this.userID,
      username: this.username
    };
  }
}
