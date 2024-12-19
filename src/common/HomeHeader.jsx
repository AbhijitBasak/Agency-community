import React from 'react'
import Hero from '../components/Hero'
import { NavLink } from "react-router";
import CustomButton from '../components/CustomButton/CustomButton';

export default function HomeHeader() {
  return (
    <>
      <header className='section-navbar' style={{ backgroundImage: "url('/images/background.png')", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className="side-img">
          <img src="/images/Ornament2.png" alt="" />
        </div>

        <div className="container">

          <div className='logo'>
            <img src="/images/logo.png" alt="Logo" />
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
        <Hero />
      </header >
    </>
  )
}
