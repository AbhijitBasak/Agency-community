import React from 'react'
import Button from '../components/Button'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-container">
            {/* Branding */}
            <div className="footer-section branding">
              <div className='logo'>
                <img src="/images/logo.png" alt="Logo" />
                <h1>Canvix</h1>
              </div>
              <p>
                We're a team of strategic creators and digital innovators, united in
                our pursuit of efficiency and impact.
              </p>
            </div>

            {/* Pages Links */}
            <div className="footer-section pages">
              <h3>Pages</h3>
              <ul>
                <li>Home 1</li>
                <li>Home 2</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Portfolio</li>
                <li>Portfolio Single</li>
              </ul>
            </div>

            {/* Utility Pages Links */}
            <div className="footer-section utility-pages">
              <h3>Utility Pages</h3>
              <ul>
                <li>Style Guide</li>
                <li>Instructions</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>Error 404</li>
                <li>Password Protected</li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="footer-section subscribe">
              <h3>Subscribe</h3>
              <div className="footer-input">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="email-input"
                />
                <Button label="Subscribe" backgroundColor="black" textColor="#fff"/>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>Copyright by <strong>yourwebsite.com</strong></p>
            <p>Contact Us: +1 (452) 4529</p>
            <p>Address: 99 Springfield Ldn, Dayton 414, 85060</p>
            <div className="social-icons">
              <span>🔗</span>
              <span>🔗</span>
              <span>🔗</span>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
