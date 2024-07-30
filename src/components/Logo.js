import React from 'react'
import { Link } from 'react-router-dom'
import "./Logo.css"

export const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">
            <img className='image' src='https://media.designrush.com/agencies/163563/conversions/Iteron-Technologies-logo-profile.jpg' alt='' ></img>
            </Link>
            <div className='logo-contact'>
                <i className="clock fa-regular fa-clock"></i>
                <div className='details'>
                    <p>Contact Time</p>
                    <br></br>
                    <p>24 X 7</p>
                </div>
            </div>
            <div className='mail'>
                <i className="message fa-regular fa-envelope"></i>
                <div className='detail'>
                    <p>Contact Us</p>
                    <br></br>
                    <p>info@iterontech.com</p>
                </div>
            </div>
        </div>
    )
}
