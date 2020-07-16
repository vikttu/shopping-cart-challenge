import React from 'react'



function CheckoutButton(){
    return(
        <button type="submit" className="checkout-button" onClick={() => console.log('checkout working!')} >CHECKOUT</button>
    )
}

export default CheckoutButton