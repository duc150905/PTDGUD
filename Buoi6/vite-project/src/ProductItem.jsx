import React from 'react'
import { useCart } from './CartContext'
import { useNoti } from './NotiContext'
function ProductItem({product}) {
    const {addToCart}=useCart();
    const {showNoti}=useNoti();
    const handleAdd=()=>{
        addToCart(product);
        showNoti("Added to Cart");
    }
  return (
    <div>
        <p>{product.title}</p>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default ProductItem