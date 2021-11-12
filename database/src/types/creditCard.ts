import { Document } from 'mongoose';

export interface User extends Document {
  _id: String;
  Brand: String;
  Email: String;
  CCName: String;
  CCNumber: String;
  CCDate: Date;
}
