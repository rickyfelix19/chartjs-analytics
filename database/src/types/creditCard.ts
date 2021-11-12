import { Document } from 'mongoose';

export interface creditCardTypes extends Document {
  Brand: String;
  Email: String;
  CCName: String;
  CCNumber: String;
  CCDate: Date;
}
