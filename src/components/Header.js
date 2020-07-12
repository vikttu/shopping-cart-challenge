import React from 'react'
import profile from '../assets/profile.svg'

const userName = "John Doe"
function Header(){
    return(
        <header>
                <h1 className="shop-name">Shopping</h1>
                <div className="user-icon">
                <img src={profile} className="profile-picture" alt="Profile" />
                <h3 className="user-name"> {userName} </h3>
                </div>
        </header>
    )
}

export default Header