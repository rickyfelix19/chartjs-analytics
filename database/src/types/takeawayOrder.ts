import { Document } from 'mongoose';

export interface takeawayOrder extends Document {
  _id: string;
  UserID: string;
  TakeawayList: Array<string>;
}
