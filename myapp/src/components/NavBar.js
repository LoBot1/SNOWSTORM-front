import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillBasket2Fill, } from "react-icons/bs";
import { CgProfile} from "react-icons/cg";


import { Link } from "react-router-dom";
import useModal from "./useModale";
import Modal1 from "./Modal1";
import '../style/main.css'
// npm install react-icons
function NavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");

    }
    const { isShowing, toggle } = useModal();
    return (
        <header>
            <div className="Navbar">
                <nav ref={navRef}>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                    <div>
                        <ul>
                            <li>
                                <a href="/home"><img className="logo" src="https://cdn.discordapp.com/attachments/1067015324530118716/1067408658713018458/Capture_1.png" alt="elite basket camps" /></a>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li>
                            <a href="/Entraineur">Personalisé</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Camps">Contact</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/product">Produits</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/galerie">Galerie</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/support">Support/SAV</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <>
                                <div className="App">
                                    <button className="modal-toggle" onClick={toggle}>
                                        Help
                                    </button>

                                    <Modal1
                                        isShowing={isShowing} hide={toggle} />
                                </div>

                            </>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Basket"> <BsFillBasket2Fill /></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Basket"> <CgProfile /></a>
                        </li>
                    </ul>
                </nav>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>


    );
}


export default NavBar;