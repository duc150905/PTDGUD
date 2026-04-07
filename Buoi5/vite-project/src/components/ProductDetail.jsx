import React from 'react'
import { useNavigate } from 'react-router-dom'
function ProductDetail() {
    const navigate=useNavigate();
    const handleBuy=()=>{
      navigate("/checkout");
    }
  return (
    <div>
      <button onClick={handleBuy}>Mua hàng</button>
    </div>
  )
}

export default ProductDetail