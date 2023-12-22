interface Address {
  street: string;
  city: string;
  state: string;
}
export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  address: Address;
  phone: string;
}
