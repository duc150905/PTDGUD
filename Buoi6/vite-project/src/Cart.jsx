import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from './cartState'
function Cart() {
    const [cart, setCart] = useRecoilState(cartState);
    const increase = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 } : item
            ))
    }
    const decrease = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0)
        )
    }
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );
    return (
        <div>
            <h2>Giỏ hàng</h2>
            {cart.length === 0 && <p>Chưa có sản phẩm</p>}
            {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                    <b>{item.name}</b> - {item.price}$
                    <br />
                    Số lượng: {item.quantity}
                    <br />
                    <button onClick={() => increase(item.id)}>+</button>
                    <button onClick={() => decrease(item.id)}>-</button>

                </div>
            ))}
            <hr />
            <h3>Tổng tiền:{total}$</h3>
        </div>
    )
}

export default Cart