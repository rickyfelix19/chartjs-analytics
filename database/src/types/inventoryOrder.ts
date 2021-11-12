import { Document } from 'mongoose';

export interface inventoryOrderTypes extends Document {
  UserID: string;
  ProductList: Array<string>;
}
