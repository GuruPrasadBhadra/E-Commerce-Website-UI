import React from 'react'
import AdminSidebar from '../../../components/admin/AdminSidebar'
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { OrderType, OrderItemType } from "../../../types/InterFace";
const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];
const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Puma Shoes",
    address: "77 black street",
    city: "Neyword",
    state: "Nevada",
    country: "US",
    pinCode: 242433,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "bwdhfhdf"
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = (): void => {
    setOrder((prev) => ({
      ...prev,
      status: "Shipped",
    }));
  };
  return (
    <div className='adminContainer'>
      <AdminSidebar />

      <main className="product-management">
        <section
          style={{
            padding: "2rem",
          }}
        >
          <h2>Order Items</h2>

          {orderItems.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              photo={item.photo}
              id={item.id}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </section>

        <article className="shipping-info-card">
          {/* <button className="product-delete-btn" >
            <FaTrash />
          </button> */}
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                    ? "green"
                    : "red"
              }
            >
              {status}
            </span>
          </p>
          <button className="shipping-btn" onClick={updateHandler}>
            Process Status
          </button>
        </article>
      </main>
    </div>
            
  )
}

const ProductCard = ({
  name,
  photo,
  price,
  quantity,
  id,
}: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${id}`}>{name}</Link>
    <span>
      ₹{price} X {quantity} = ₹{price * quantity}
    </span>
  </div>
);

export default TransactionManagement