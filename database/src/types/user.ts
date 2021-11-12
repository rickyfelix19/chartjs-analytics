import { Document } from 'mongoose';

export interface User extends Document {
  _id: string;
  FirstName: string;
  LastName: String;
  PhoneNumber: String;
  UserName: String;
  Password: String;
  UserType: String;
}
