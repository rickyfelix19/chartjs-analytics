import { receiptTypes } from '../types/receipts';
import { model, Schema } from 'mongoose';

const receiptSchema: Schema = new Schema(
  {
    OrderID: {
      type: String
    },
    OrderType: {
      type: String
    },
    Name: {
      type: String
    },
    Email: {
      type: String
    },
    Phone: {
      type: String
    }
  },
  { timestamps: true }
);

export default model<receiptTypes>('Receipt', receiptSchema);
