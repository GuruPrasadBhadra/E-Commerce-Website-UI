import React from 'react'
import { ProductsProps } from '../types/UserTypes'
import { FaPlus } from "react-icons/fa";

const ProductCard = ({ productId,
    price,
    name,
    photo,
    stock,
    handler,
}: ProductsProps) => {
    return (
        <div className="product-card">
            <img src={`${photo}`} alt={name} />
            <p>{name}</p>
            <span>₹{price}</span>

            <div>
                <button
                    onClick={handler}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default ProductCard