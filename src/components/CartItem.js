import React from 'react'
import AddItem from './AddItem'
import DelItem from './DelItem'
import shoppingBag from '../assets/shopping-bag.svg'


function CartItem(){
    return(
        <div className="cart-item">
            <img src={shoppingBag} alt="Product" width="50px" height="75px" />
            <div className="cart-item-info">
                <h4 className="cart-item-info">Product</h4>
                <p className="cart-item-info">Quantity: {} Price: {}</p>
            </div>
            <div className="cart-item-buttons">
                <AddItem />
                <DelItem />
            </div>
        </div>
    )
}

export default CartItem