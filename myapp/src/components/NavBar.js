import { useRef, useState } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../style/main.css'
// npm install react-icons
function  NavBar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        
    }
    
    return( 
        <header>
            <div>
                <nav ref={navRef}>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                    <ul>
                        <li>
                            <a href="/Entraineur">Produit</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Camps">Personalisé</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Contact">Contact</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/home"><img className="logo" src="https://cdn.discordapp.com/attachments/1067015324530118716/1067408658713018458/Capture_1.png"/></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Shop">Support/SAV</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Contact">FAQ</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>


     );
}


export default NavBar ; 