import { Document } from 'mongoose';

export interface productTypes extends Document {
  ProductName: String;
  ProductQuantity: Number;
  ProductPrice: String;
  Available: Boolean;
  Limited: Boolean;
}
