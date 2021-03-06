import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ProductsList from './ProductsList'
import ShoppingCart from './ShoppingCart'


function ShoppingBody(){
    const [products, setProducts] = useState(() => [])
    
    useEffect( ()=> {
        axios.get(`https://shielded-wildwood-82973.herokuapp.com/products.json`)
        .then(res => setProducts(prevProducts => res.data.products))
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="shopping-body">
            <ProductsList products={products}  />
            <ShoppingCart />
        </div>
    )
}

export default ShoppingBody