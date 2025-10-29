import React from 'react'
import { Link } from 'react-router' 

const Header = () => {
  return (
    <div className='navBar'>
        <div>
            <a href="/home">Home</a>
        </div>
        <div>
            Products
        </div>
        <div>
            About
        </div>
        <div>
            Contact
        </div>
        <div>
            <a href="/login">Login</a>
        </div>
        <div>
            <a href="/register">Register</a>
        </div>

    </div>
  )
}

export default Header