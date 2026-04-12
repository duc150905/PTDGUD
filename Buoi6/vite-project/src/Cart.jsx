import React from 'react'
import { useCart } from './CartContext'
function Cart() {
    const {cart, removeFromCart} = useCart();

    return (
        <div>
            <h2>Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Cart