import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown';

export const Navbar = () => {

  const [digitdropdown, setDigitdropdown] = useState(false);
  const [consultdropdown, setConsultdropdown] = useState(false) ;
  const [Portfoliodropdown, setPortfoliodropdown] = useState(false) ;

  return (
    <>
    <div className='navbardown'>
      <div className='contant'>
        <Link className='digitize' to="/digitizes" onMouseEnter={() => setDigitdropdown(true)}
        onMouseLeave={() => setDigitdropdown(false)}>Digitize {digitdropdown && <Dropdown type={"digitize"}/>} </Link>
        <Link className='cloud' to="/CloudService" >Cloud services</Link>
        <Link className='consult' to="/" onMouseEnter={() => setConsultdropdown(true)}
        onMouseLeave={() => setConsultdropdown(false)}>Consultation {consultdropdown && <Dropdown type={"consultation"}/>} </Link>
        
        <Link className='portfolio' to="/" onMouseEnter={() => setPortfoliodropdown(true)}
        onMouseLeave={() => setPortfoliodropdown(false)}>Our Portfolio {Portfoliodropdown && <Dropdown type={"portfolio"} />} </Link>
        <Link className='careers' to="/" >Careers</Link>
        <Link className='newsroom' to="/" >Newsroom</Link>
        <Link className='products' to="/" >Products</Link>
        <Link className='elixir' to="/" >ElixirExperts</Link>
        <Link className='contactus' to="/" >Contact us</Link>
      </div>
    </div>
    </>
  )
}
