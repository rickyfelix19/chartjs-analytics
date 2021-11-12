import { Document } from 'mongoose';

export interface payment extends Document {
  _id: string;
  UserID: string;
  CreditCardID: string;
  OrderType: string;
  OrderList: Array<string>;
  TotalPrice: string;
}
