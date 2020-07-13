import React from 'react'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'

function ShoppingCart(){
    return(
        <div className="cart-container">
            <div className="shopping-cart">
                <h2 className="cart-header">Shopping Cart</h2>
                <div className="items-added">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <form className="discount-section">
                    <input type="text" id="voucher" name="voucher" placeholder="Discount code"></input>
                    <button type="submit" className="discount-button" onClick={() => console.log('discount working!')} >APPLY</button>
                </form>
                <div className="invoice-details">
                    <hr />
                    <p>Subtotal:</p>
                    <hr />
                    <p>Shipping: </p>
                    <hr />
                    <p>Discount: </p>
                    <hr />
                    <div className="total">
                        <strong>Total: </strong>
                    </div>
                </div>
            </div>
            <CheckoutButton />
        </div>
    )
}

export default ShoppingCart