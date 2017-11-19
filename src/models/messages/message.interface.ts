import {Users} from "../users/users.interface";

export interface Message {
  user: Users;
  date: Date;
  lastMessage: string;
}
