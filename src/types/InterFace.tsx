import { IconType } from "react-icons";
import { Location } from "react-router-dom";
import { ReactElement } from "react";
export interface LiProps{
    url:string,
    text:string,
    location:Location,
    Icon:IconType

}


export interface WidgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
  }

  export interface CategoryItemProps {
    color: string;
    value: number;
    heading: string;
  }
  

  export interface BarChartProps{
    horizontal?:boolean,
    data_1:number[],
    data_2:number[],
    title_1:string,
    title_2:string,
    bgColor_1:string,
    bgColor_2:string,
    lable?:string[]
  }
  

  export interface DoughnutChartProps {
    labels: string[];
    data: number[];
    backgroundColor: string[];
    cutout?: number | string;
    legends?: boolean;
    offset?: number[];
  }

  export interface TableDataType {
    _id: string;
    quantity: number;
    discount: number;
    amount: number;
    status: string;
  }

  export interface ProductDataType {
    photo: ReactElement;
    name: string;
    price: number;
    stock: number;
    action: ReactElement;
  }

  export interface UserDataType {
    avatar: ReactElement;
    name: string;
    email: string;
    gender: string;
    role: string;
    action: ReactElement;
  }

  export interface TransactionDataType {
    user: string;
    amount: number;
    discount: number;
    quantity: number;
    status: ReactElement;
    action: ReactElement;
  }

  export interface NewProductFromDataType{
    Name:string,
    Price:number | null,
    Stock:number | null,
    Catagory:string
  }

  export interface OrderType{
    name: string,
    address: string,
    city: string,
    state: string,
    country: string,
    pinCode: number,
    status: string,
    subtotal: number,
    discount: number,
    shippingCharges: number,
    tax: number,
    total: number,
    orderItems:OrderItemType[],
    _id:string
  }

  export interface OrderItemType{
    name: string,
    photo: string,
    id: string,
    quantity: number,
    price: number,
    
  }


  export interface PieChartProps {
    labels: string[];
    data: number[];
    backgroundColor: string[];
    offset?: number[];
  }

  export interface LineChartProps {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    labels?: string[];
  }