import React from 'react'
import ProductsList from './ProductsList'
import ShoppingCart from './ShoppingCart'


function Body(){
    return(
        <div className="body-container">
            <ProductsList />
            <div>
                This is the body of my website
            </div>
            <ShoppingCart />
        </div>
    )
}

export default Body