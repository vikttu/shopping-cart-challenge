import React from 'react'
import delIcon from '../assets/cart-subtract.svg'



function DelItem(){
    return(
        <button className="del-item">
            <img src={delIcon} className="del-icon" alt="Delete button" />
        </button>
    )
}

export default DelItem