import React from 'react'

import ProductItem from './ProductItem'
import productsArray from './products-array'

console.log(productsArray)

function ProductsList(){

    const productsComponents = productsArray.map(product => <ProductItem 
        key={product.id} 
        name={product.name} 
        price={product.price} 
        quantity={product.quantity} />)
    console.log(productsComponents)
    return(
        <div className="products-list">
            {productsComponents}
        </div>
    )
}

export default ProductsList