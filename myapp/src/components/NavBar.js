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
                            <a href="/home"><img className="logo" src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a0/Logo_Orl%C3%A9ans_Loiret_Basket_-_2014.svg/1200px-Logo_Orl%C3%A9ans_Loiret_Basket_-_2014.svg.png" alt="elite basket camps"/></a>
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