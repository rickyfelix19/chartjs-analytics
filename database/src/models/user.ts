import { userTypes } from '../types/user';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema(
  {
    FirstName: {
      type: String
    },
    LastName: {
      type: String
    },
    PhoneNumber: {
      type: String
    },
    UserName: {
      type: String
    },
    Password: {
      type: String
    },
    UserType: {
      type: String
    }
  },
  { timestamps: true }
);

export default model<userTypes>('User', userSchema);
