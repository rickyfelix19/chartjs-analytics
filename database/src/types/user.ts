import { Document } from 'mongoose';

export interface userTypes extends Document {
  FirstName: string;
  LastName: String;
  PhoneNumber: String;
  UserName: String;
  Password: String;
  UserType: String;
}
