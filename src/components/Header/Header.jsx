import React, { useState } from "react";
import './Header.css';
import { FaHeart } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
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
                        <li><NavLink exact activeclassname="active" to="/">Home</NavLink></li>
                        <li><NavLink activeclassname="active" to="/about">About Us</NavLink></li>
                        <li><NavLink activeclassname="active" to="/contact">Contact</NavLink></li>
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