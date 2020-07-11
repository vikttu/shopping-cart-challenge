import React from 'react'



function CheckoutButton(){
    return(
        <button type="submit" className="checkout-buttom" onClick={() => console.log('checkout working!')} >CHECKOUT</button>
    )
}

export default CheckoutButton