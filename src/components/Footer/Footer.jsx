import React from 'react'
import './Footer.css'
import "../Header/Header.css"

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="f-container">
            <div className="line1 flex-row">
            <div className="about">
                <a href="/about">About Us</a>
            </div>
            <div>•</div>

            <div className="contact">
                <a href="/contact">Contact</a>
            </div>
            <div>•</div>

            <div className="TandC">
                <a href="/terms">Terms & Conditions</a>
            </div>
            <div>•</div>

            <div className="privacy">
                <a href="/privacy">Privacy Policy</a>
            </div>
            </div>

            <div className="line2 flex-row">
            <div className="rights">
                Price Prowler LLC © All Rights Reserved.
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
