import React from 'react'
// import logo from '../images/logo.png'
import Button from '../components/Button'
import Hero from '../components/Hero'
import { NavLink } from "react-router";

export default function Header() {
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
            <ul>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contactus">Contact Us</NavLink>
            </ul>
          </nav>

          <div className="nav-btn">
            <Button label="Get in touch" />
          </div>

        </div>
        <Hero />
      </header >
    </>
  )
}
