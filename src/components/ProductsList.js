import React from 'react'

import ProductItem from './ProductItem'


function ProductsList(props){
    console.log(props)
    const productsComponents = props.products.map(product => <ProductItem 
        key={product.id} 
        name={product.name} 
        price={product.price} 
        available={product.available} />)
        console.log(productsComponents)
        return( 
        <div className="products-list">
            {productsComponents}
        </div>)

        }
export default ProductsList