export interface IComment {
    body:string;
    odiseaId:string;
    rating: number;
    reservationId:string;
    userId:string;
    username:string;

    toJSON():any
}
