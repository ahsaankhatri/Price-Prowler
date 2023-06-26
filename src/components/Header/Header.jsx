import React, { useState } from "react";
import './Header.css';
import { FaHeart } from 'react-icons/fa';
//import { TiThMenu } from "@react-icons/all-files/fa/TiThMenu";


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && "-100%"}
        }
    }
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
                <div className="menu" >
                    <ul style={getMenuStyles(menuOpened)}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                <FaHeart size={30}/>
            </div>
            </div>
        </section>
    )
}

export default Header