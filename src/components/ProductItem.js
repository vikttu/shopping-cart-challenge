import React from 'react'
import shoppingBag from '../assets/shopping-bag.svg'

const productPlaceholder = {
    id: 1,
    name: 'Product',
    price: '123.00',
    quantity: 2,
}

function ProductItem(){
    return(
        <div className="product-item">
            <img src={shoppingBag} alt="Product" height="64" width="64" />
            <h4>Product Name</h4>
            <p>$ {productPlaceholder.price} - {productPlaceholder.quantity} left</p>
            <button type="submit" className="buy-item" onClick={() => console.log('working!')} >BUY</button>
        </div>
    )
}

export default ProductItem