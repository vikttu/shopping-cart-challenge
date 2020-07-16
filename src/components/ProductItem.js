import React from 'react'
import shoppingBag from '../assets/shopping-bag.svg'


function ProductItem(props){
    return(
        <div className="product-item">
        <img src={shoppingBag} alt="Product" height="75" width="150"/>
        <h4>{props.name}</h4>
        <p>$ {props.price} - {props.available} left</p>
        <button type="submit" className="buy-item" onClick={() => console.log('buy item') } >BUY</button>
        </div>
        )
    }
    

export default ProductItem
