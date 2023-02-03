import { useEffect, useInsertionEffect, useState } from 'react';
import { DeleteOneItem } from "../api/DeleteOneItem";
import "../style/Basket.css"
import {userBasket, basketInsertUpdate} from "../api/Basket"

function Basket() {
    const [ Basket, setBasket ] = useState([]);
    const [ count, setCount ] = useState([]);
    const isLoggedIn = localStorage.getItem('profil')

    function Delete(data) {
        DeleteOneItem(data);
        setCount(count+1);
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('profil')
        if (isLoggedIn) {
            const BasketCatched = userBasket(isLoggedIn);
            BasketCatched
                .then(result => setBasket(result))
                .catch(error => console.error("Erreur avec notre API :", error.message));
            console.log(Basket,"hey")
        }
    },[count]);

    return <div className="pokemon-list">
        <div className="flop">
        {
            Basket.map((Basket,key) =>{
                    return <div key={key} className="bloc-pokemon">
                        <div className='card'>
                            <h1>{Basket.name_product}</h1>
                            <button className="nav-btn nav-close-btn" onClick={() => Delete(Basket._id) } >
                                <ul>
                                    <li>
                                        <a href="/Basket">Supprimer le Produit</a>
                                    </li>
                                </ul>
                            </button>
                        </div>
                </div>

            })
        }

        </div>
    </div>;
}

export default Basket;