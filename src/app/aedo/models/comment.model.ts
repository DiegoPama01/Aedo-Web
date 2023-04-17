import { IComment } from "../interfaces/comment.interface";


export class Comment implements IComment {
  id: string;
  body:string;
  odiseaId:string;
  rating: number;
  reservationID:string;
  userID:string;
  username:string;

  constructor(id: string, body: string, odiseaId:string,rating:number,reservationID:string,userID:string,username:string) {
    this.id = id;
    this.body = body;
    this.odiseaId = odiseaId;
    this.rating = rating;
    this.reservationID=reservationID;
    this.userID = userID;
    this.username = username;
  }
}
