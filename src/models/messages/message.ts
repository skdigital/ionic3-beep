import {Users} from "../users/users";

export interface Message {
  user: Users;
  date: Date;
  lastMessage: string;
}
