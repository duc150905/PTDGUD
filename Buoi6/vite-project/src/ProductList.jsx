import React from 'react'
import { useNotification } from './useNotification'
function ProductList() {
    const { showNotification } = useNotification();
    const handleAdd = () => {
        showNotification("Thêm sản phẩm thành công", "success");
    }
    const handleError = () => {
        showNotification("Có lỗi xảy ra!", "error");
    };
    return (
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleError}>Error</button>
        </div>
    )
}

export default ProductList