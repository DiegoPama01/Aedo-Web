import { IUser } from "../interfaces/user.interface";

export class User implements IUser{
    username: string;
    email: string;

    constructor(username:string,email:string){
        this.username = username;
        this.email = email;
    }
}
