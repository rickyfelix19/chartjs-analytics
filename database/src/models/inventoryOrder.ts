import { inventoryOrderTypes } from '../types/inventoryOrder';
import { model, Schema } from 'mongoose';

const inventoryOrderSchema: Schema = new Schema(
  {
    UserID: {
      type: String
    },
    ProductList: {
      type: [String]
    }
  },
  { timestamps: true }
);

export default model<inventoryOrderTypes>(
  'Inventory Order',
  inventoryOrderSchema
);
