import React from 'react'
import { useSetRecoilState } from 'recoil'
import { cartState } from './cartState'
function ProductList() {
    const setCart=useSetRecoilState(cartState);
    const products=[
        {id:1,name:"áo",price:100},
        {id:2,name:"quần",price:200},
        {id:3,name:"giày",price:300}
    ];
    const addToCart=(product)=>{
        setCart((prev)=>{
            const exist=prev.find((item)=>item.id===product.id);
            if(exist){
                return prev.map((item)=>
                item.id===product.id
                ?{...item,quantity:item.quantity+1}
                :item
                )
            }
            return [...prev,{...product,quantity:1}];
        })
    }
  return (
    <div>
        <h2>Sản phẩm</h2>
        {products.map((p)=>(
            <div key={p.id} style={{marginBottom:"10px"}}>
                {p.name} - {p.price}$
                <button onClick={()=>addToCart(p)} style={{ marginLeft: "10px"} }>Thêm</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList