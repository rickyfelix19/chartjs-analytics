import { paymentTypes } from '../types/payment';
import { model, Schema } from 'mongoose';

const paymentSchema: Schema = new Schema(
  {
    UserID: {
      type: String
    },
    CreditCardID: {
      type: String
    },
    OrderType: {
      type: String
    },
    OrderList: {
      type: [String]
    },
    TotalPrice: {
      type: String
    }
  },
  { timestamps: true }
);

export default model<paymentTypes>('Payment', paymentSchema);
