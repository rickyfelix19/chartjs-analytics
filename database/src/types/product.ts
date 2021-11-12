import { Document } from 'mongoose';

export interface product extends Document {
  _id: String;
  ProductName: String;
  ProductQuantity: Number;
  ProductPrice: String;
  Available: Boolean;
  Limited: Boolean;
}
