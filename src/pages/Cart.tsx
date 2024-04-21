import React,{useState} from 'react'
import CartItem from '../components/CartItem';
import { VscError } from "react-icons/vsc";
import { Link } from 'react-router-dom';
const cartItems=[
  {
    productId: "nasfjkaf",
    photo: "https://m.media-amazon.com/images/I/71eXNIDUGjL._SX679_.jpg",
    name: "MacBook",
    price: "20000",
    quantity: 4,
    stock: 10,
  }
]
const subtotal=40000;
const shippingCharges=50;
const tax=200;
const discount=300;
const total=40550

const Cart:React.FC = () => {

  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);


  return (
    <>
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItem
              // incrementHandler={incrementHandler}
              // decrementHandler={decrementHandler}
              // removeHandler={removeHandler}
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
    </>
    
  )
}

export default Cart