import { Document } from 'mongoose';

export interface receiptTypes extends Document {
  OrderID: string;
  OrderType: string;
  Name: string;
  Email: string;
  Phone: string;
}
