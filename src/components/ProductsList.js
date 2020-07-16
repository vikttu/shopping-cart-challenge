import React from 'react'

import ProductItem from './ProductItem'


function ProductsList(props){
    const productsComponents = props.products.map(product => <ProductItem 
        key={product.id} 
        name={product.name} 
        price={product.price} 
        available={product.available} />)
        return( 
        <div className="products-list">
            {productsComponents}
        </div>)

        }
export default ProductsList