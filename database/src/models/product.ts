import { productTypes } from '../types/product';
import { model, Schema } from 'mongoose';

const productSchema: Schema = new Schema(
  {
    ProductName: {
      type: String
    },
    ProductQuantity: {
      type: String
    },
    ProductPrice: {
      type: String
    },
    Available: {
      type: String
    },
    Limited: {
      type: String
    }
  },
  { timestamps: true }
);

export default model<productTypes>('Product', productSchema);
