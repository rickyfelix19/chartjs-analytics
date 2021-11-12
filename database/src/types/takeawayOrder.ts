import { Document } from 'mongoose';

export interface takeawayOrderTypes extends Document {
  UserID: string;
  TakeawayList: Array<string>;
}
