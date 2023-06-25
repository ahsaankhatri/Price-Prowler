import React from "react";
import './Header.css'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flex-row h-container">
                <div className="col-3">
                    <div className="logo">
                        <a href="/">
                            <img src="./PP-Logo.png" alt="Logon" width={100} />
                        </a>
                        <h1><a href="/">Price Prowler</a></h1>
                    </div>
                </div>
            <div className="col-8">
                <div className="menu">
                    <ul>
                        <li><a className= "home" href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Header