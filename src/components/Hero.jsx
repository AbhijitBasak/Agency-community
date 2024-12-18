import React from 'react'
import Button from './Button'

import { FaCircleChevronRight } from "react-icons/fa6";
import { GiChestnutLeaf } from "react-icons/gi";
import { MdAutorenew } from "react-icons/md";
import { GiOvermind } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className='section-hero'>
        <div className="container grid grid-two--cols">
          <div className="section-hero--content">

            <h1 className="hero-heading">
              Ready to take your<br />
              <span className='highlight'> Business Growth </span><br />
              to the next level?
            </h1>

            <p className="hero-para">GreenishAutomation
              Welcome to Agency community, your ultimate destination for
              cutting-edge gadgets! Explore the latest in tech innovation and
              style with us. Shop now and discover a world of possibilities!
            </p>

            <div className="hero-btn">
              <Button icon={<FaCircleChevronRight />} label="Start your Free Trial" />
            </div>

            <div className="brand-logo">
              <h2>Trusted by Leading Brands</h2>
              <ul>
                <li> <GiChestnutLeaf /> Greenish</li>
                <li> <MdAutorenew /> Automation</li>
                <li> <FaLeaf /> Leafe</li>
                <li> <GiOvermind /> Mindfulness</li>
              </ul>
            </div>

          </div>

          <div classNameName="section-hero-image">

            <img src="/images/hero.png" alt="hero-img" />

          </div>
        </div>
      </section>
    </>
  )
}
