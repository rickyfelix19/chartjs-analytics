import { Document } from 'mongoose';

export interface paymentTypes extends Document {
  UserID: string;
  CreditCardID: string;
  OrderType: string;
  OrderList: Array<string>;
  TotalPrice: string;
}
