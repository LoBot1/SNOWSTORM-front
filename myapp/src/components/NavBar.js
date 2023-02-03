import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillBasket2Fill, } from "react-icons/bs";
import { CgProfile} from "react-icons/cg";
import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/main.css';
import emailjs from '@emailjs/browser';


// npm install react-icons
function NavBar() {
    const [show, setShow] = useState(false);
    const navRef = useRef();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j1ugnxo', 'template_yv1wmlo', form.current, 'QitSqdMPmO0-2Vtk0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    
    

    }
    return (
        <header>
            <div className="Navbar">
                <nav ref={navRef}>
                    <button className="nav-btn nav-trajet-btn" onClick={showNavbar}>
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
                                <Button variant="primary" onClick={() => setShow(true)}>
                                    <a>Contacts</a>
                                </Button>
                                <form >
                                <Modal
                                    show={show}
                                    onHide={() => setShow(false)}
                                >
                                    
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                                <div className="modal-header">
                                                    <h1 className="h1-modal">Nous Contacter</h1>
                                                </div>
                                        </Modal.Title>
                                    <Modal.Body>
                                        <form ref={form} onSubmit={sendEmail} className='form'>
                                                <label>Nom</label>
                                                <input type="text" name="from_name" required/>
                                                <label>Prénom</label>
                                                <input type="text" name="from_nickname" required />
                                                <label>Email</label>
                                                <input type="email" name="from_email" required/>
                                                <label>Message</label>
                                                <textarea name="message" />
                                                <input type="submit" className="btn" value="Envoyer"/>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                                </form>
                                </>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/faq">FAQ</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Basket"> <BsFillBasket2Fill /></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/signup"> <CgProfile /></a>
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