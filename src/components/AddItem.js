import React from 'react'
import addIcon from '../assets/cart-add.svg'


function AddItem(){
    return(
        <button className="add-item">
            <img src={addIcon} className="add-icon" alt="Add button" />
        </button>
    )
}

export default AddItem