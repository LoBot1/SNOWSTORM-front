import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import { MdCatchingPokemon, MdDelete } from 'react-icons/md';
import { GrValidate } from 'react-icons/gr';
import { getAll } from '../api/GetProduct';
import { userBasket, basketInsertUpdate} from "../api/Basket"
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AddLike } from '../api/AddLike';

import Basket from "./Basket";

import NavBar from '../components/NavBar';
import '../style/home.css'
import '../style/produit.css'

function Product(props) {
    const isLoggedIn = localStorage.getItem('profil')
    const [Produit, setProduit] = useState([]);
    const [Basket, setBasket] = useState([]);

    function isLoger(data,name) {
        if (isLoggedIn) {
            basketInsertUpdate(data,isLoggedIn,name)
        }
    }


    useEffect(() => {
        const ProduitFetched = getAll();
        ProduitFetched
            .then(result => setProduit(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const isLoggedIn = localStorage.getItem('profil')
        if (isLoggedIn) {
            const BasketCatched = userBasket(isLoggedIn);
            BasketCatched
                .then(result => setBasket(result))
                .catch(error => console.error("Erreur avec notre API :", error.message));
            console.log(Basket,"hey")
        }
    }, []);
    
    return <div className="pokemon-list">
        <div className="flex">
            {
                Produit.map((Produit, key) => {
                    return <div key={key} className="bloc-pokemon">
                        <div className='card'>
                            <div className='container'>
                                <img src={Produit.img} />
                                <div className='overlay'>
                                    <div className="desc">
                                        {Produit.name}
                                    </div>
                                    <div className='button' >
                                        {
                                            Basket.find(basket => basket.id_product === Produit._id) ? <button className="nav-btn nav-close-btn" >
                                                <ul>
                                                    <li>
                                                        <a>deja dans le panier</a>
                                                    </li>
                                                </ul>
                                            </button> : <button className="nav-btn nav-close-btn" onClick={() => isLoger(Produit._id,Produit.name)} >
                                                <ul>
                                                    <li>
                                                        <a href=""><BsFillBasket2Fill /></a>
                                                    </li>
                                                </ul>

                                            </button>
                                        }
                                        <br></br><br></br><br></br>
                                        <button className="nav-btn nav-close-btn" onClick={() => AddLike(Product._id)}>
                                                <ul>
                                                    <li>
                                                        <a href=""><AiFillLike /></a>
                                                    </li>
                                                </ul> 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                })
            }

        </div>
    </div>;
}

export default Product;