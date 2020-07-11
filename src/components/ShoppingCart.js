import React from 'react'
import CheckoutButton from './CheckoutButton'

function ShoppingCart(){
    return(
        <div className="cart-container">
            <div className="shopping-cart">
                <h2 className="cart-header">Shopping Cart</h2>
                <div className="items-added">
                    Products section (render component)
                </div>
                <div className="discount-section">
                    <input type="text" id="voucher"></input>
                    <button type="submit" className="discount-buttom" onClick={() => console.log('discount working!')} >APPLY</button>
                </div>
                <div className="invoice-details">
                    <hr />
                    <p>Subtotal:</p>
                    <hr />
                    <p>Shipping: </p>
                    <hr />
                    <p>Discount: </p>
                    <hr />
                    <strong>Total: </strong>
                </div>
            </div>
            <CheckoutButton />
        </div>
    )
}

export default ShoppingCart