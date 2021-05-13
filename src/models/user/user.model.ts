import { PhoneNumber, Address } from "../user";

export interface User {
  id: number;
  name: string;
  age: number;
  address: Address;
  phone: PhoneNumber;
}
