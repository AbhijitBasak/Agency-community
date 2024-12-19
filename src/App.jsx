import React from 'react'
import Header from './common/HomeHeader'
import Footer from './common/Footer'
import {  Routes ,Route } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Header2 from './common/Header2'

export default function App() {
  return (
    <>
      <Header2 />
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>

      <Footer />
    </>
  )
}

