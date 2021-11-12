import { Document } from 'mongoose';

export interface inventoryOrder extends Document {
  _id: string;
  UserID: string;
  ProductList: Array<string>;
}
