import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import {  Routes ,Route } from 'react-router'
import About from './pages/About'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>

      <Footer />
    </>
  )
}

