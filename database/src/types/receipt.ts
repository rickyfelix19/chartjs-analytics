import { Document } from 'mongoose';

export interface receipt extends Document {
  _id: string;
  OrderID: string;
  OrderType: string;
  Name: string;
  Email: string;
  Phone: string;
}
