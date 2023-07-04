import React from 'react'
import './Footer.css'
import "../Header/Header.css"

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer">
        <div className="footer-links">
            <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="copyright">
            <p><a href="#">Price Prowler</a> LLC &copy; All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
