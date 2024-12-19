import React from 'react'
import { NavLink } from "react-router";
import CustomButton from '../components/CustomButton/CustomButton';


export default function Header2() {
  return (
    <>
      <header className='header2 section-navbar'>

        <div className="container">

          <div className='logo'>
            <img src="/images/logo2.png" alt="Logo" />
            <h1>Canvix</h1>
          </div>

          <nav className='navbar'>
            <ul className='nav-links'>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contactus">Contact Us</NavLink></li>
            </ul>
          </nav>

          <div className="nav-btn">
            <CustomButton label="Get in touch" className="primary-button" />
          </div>

        </div>
       
      </header >
    </>
  )
}
