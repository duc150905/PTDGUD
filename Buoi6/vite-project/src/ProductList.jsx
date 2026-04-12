import React from 'react'
import { useProduct } from './ProductContext'
import ProductItem from './ProductItem'
function ProductList() {
    const { products, loading, error } = useProduct();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return (
        <div>
            <h2>Products</h2>
            {products.map((p) => (
                <ProductItem key={p.id} product={p} />
            ))}
        </div>
    )
}

export default ProductList