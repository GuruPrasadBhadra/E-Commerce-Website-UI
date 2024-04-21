import { ReactElement } from "react";

export interface UserType{
    name: string;
    email: string;
    photo: string;
    gender: string;
    role: string;
    dob: string;
    _id: string;
  };

  export interface ProductsProps{
    productId: string;
    photo: string;
    name: string;
    price: number;
    stock: number;
    handler: () => void;
  };

  export interface CartItem{
    productId: string;
    photo: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
  };

  export interface OrdersDataType{
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
  };