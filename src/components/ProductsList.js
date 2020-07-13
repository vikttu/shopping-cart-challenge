import React from 'react'

import ProductItem from './ProductItem'
import productsArray from './products-array'

/*This component creates the products in a more dynamic way fetching external data*/

function ProductsList(){

    const productsComponents = productsArray.map(product => <ProductItem 
        key={product.id} 
        name={product.name} 
        price={product.price} 
        quantity={product.quantity} />)

        return(
        <div className="products-list">
            {productsComponents}
        </div>
    )
}

export default ProductsList