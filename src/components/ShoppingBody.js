import React from 'react'
import ProductsList from './ProductsList'
import ShoppingCart from './ShoppingCart'


function ShoppingBody(){
    return(
        <div className="shopping-body">
            <ProductsList />
            <ShoppingCart />
        </div>
    )
}

export default ShoppingBody