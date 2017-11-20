import {Profile} from "../../models/profile/profile.interface";

const userList: Profile[] = [
  {firstName: 'Sean', lastName: 'Knowels', email: 'sean.code@outlook.com', avatar: 'assets/img/ellipse.png', dateOfBirth: new Date()},
  {firstName: 'John', lastName: 'Doe', email: 'john.code@outlook.com', avatar: 'assets/img/ellipse.png', dateOfBirth: new Date()},
  {firstName: 'Paul', lastName: 'Halliday', email: 'halliday.code@outlook.com', avatar: 'assets/img/ellipse.png', dateOfBirth: new Date()},
  {firstName: 'Mike', lastName: 'Smith', email: 'mike.code@outlook.com', avatar: 'assets/img/ellipse.png', dateOfBirth: new Date()},
  {firstName: 'Debi', lastName: 'Koti', email: 'debi.code@outlook.com', avatar: 'assets/img/ellipse.png', dateOfBirth: new Date()},
  {firstName: 'Philip', lastName: 'Gunter', email: 'philip.code@outlook.com', avatar: 'assets/img/ellipse.png', dateOfBirth: new Date()},
];

export const USER_LIST = userList;
