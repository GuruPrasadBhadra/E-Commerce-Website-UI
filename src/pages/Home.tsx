import React from 'react';
import { ProductsProps } from '../types/UserTypes';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home:React.FC = () => {
  const addToCartHandler = () => {
    // if (cartItem.stock < 1) return toast.error("Out of Stock");
    // dispatch(addToCart(cartItem));
    // toast.success("Added to cart");
  };
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        {/* {isLoading ? (
          <Skeleton width="80vw" />
        ) : (
          data?.products.map((i) => ( */}
            <ProductCard
              key={"lmDJKGDKJ"}
              productId={"ONEj"}
              name={"MacBook"}
              price={20000}
              stock={2}
              handler={addToCartHandler}
              photo="https://m.media-amazon.com/images/I/71eXNIDUGjL._SX679_.jpg"
             />
        {/* //   ))
        // )} */}
      </main>
    </div>
  );
};

export default Home;