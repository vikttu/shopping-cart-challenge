import React from 'react'
import { setProducts } from './ShoppingBody'
import shoppingBag from '../assets/shopping-bag.svg'


function ProductItem(props){
    let disabledState = false

    function buyItem(){
        setProducts(prevProducts => prevProducts.available -1)
    }


    return(
        <div className="product-item">
        <img src={shoppingBag} alt="Product" height="75" width="150"/>
        <h4>{props.name}</h4>
        <p>$ {props.price} - {props.available} left</p>
        <button type="submit" className="buy-item" onClick={() => buyItem()} disabled={disabledState}>BUY</button>
        </div>
        )
    }
    

export default ProductItem
