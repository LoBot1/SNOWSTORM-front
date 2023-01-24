import { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import {MdCatchingPokemon, MdDelete} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import { getAll } from '../api/GetProduct';
import NavBar from '../components/NavBar';
import '../style/home.css'

function Product(props){
    const [ Produit, setProduit ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
        const ProduitFetched = getAll();
        ProduitFetched
            .then(result => setProduit(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);




    return <div className="pokemon-list">
        <div className="flex">
        {
            Produit.map((Produit,key) =>{
                    return <div key={key} className="bloc-pokemon">
                        <div className='card'>
                            <div className='name'>
                                {Produit.name}
                            </div>
                            <div className='image'>
                                <img src={Produit.img} />
                            </div>

                            <div className='button' >

                            </div>
                        </div>
                </div>

            })
        }

        </div>
    </div>;
}

export default Product;