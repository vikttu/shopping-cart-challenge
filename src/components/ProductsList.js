import React from 'react'
import ProductItem from './ProductItem'


function ProductsList(){

    /*const productPlaceholder = {
        id: 1,
        name: 'Product',
        price: '123.00',
        quantity: 2,}
    }
    */

    return(
        <div className="products-list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    )
}

export default ProductsList