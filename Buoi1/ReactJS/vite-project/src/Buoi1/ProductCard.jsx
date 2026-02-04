import './ProductCard.css';
function ProductCard(){
    return(
        <div className="product-card">
            <img src="https://footgearh.vn/thumbs/500x500x2/upload/product/af-bw-1-7934.jpg" alt="" className="product-image"/>
            <h3 className="product-name">NIKE AIR</h3>
            <p className="product-price">200$</p>
            <button className="btn-cart">Add to cart</button>
        </div>
    )
}
export default ProductCard;