import { creditCardTypes } from '../types/creditCard';
import { model, Schema } from 'mongoose';

const creditCardSchema: Schema = new Schema(
  {
    Brand: {
      type: String
    },
    Email: {
      type: String
    },
    CCName: {
      type: String
    },
    CCNumber: {
      type: String
    },
    CCDate: {
      type: Date
    }
  },
  { timestamps: true }
);

export default model<creditCardTypes>('Credit Card', creditCardSchema);
