import React from 'react'
import "./Nav.css"
export default function Nav() {
  return (
    <div className='nav-container'>
        <nav>
            <div className='humberger'>
                <i className='fa fa-bars'></i>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Sell</li>
                    <li>Buy</li>
                    <li>Post</li>
                    <li>Updates</li>
                    <li>Our Work</li>
                    <li>Join</li>
                </ul>
            </div>
            <div className='nav-items-2'>
                <i className='fa fa-user'></i>
                <div className='home-cart'>
                    <i className='fa fa-shopping-bag'></i>
                    <span className='cart-items'>0</span>
                </div>
            </div>
        </nav>

        <header>
            <div>
                <h1>Standard High School Old Students Association</h1>
            </div>
        </header>
    </div>
  )
}
