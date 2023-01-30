import React, { useEffect, useInsertionEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { AiFillPlusCircle, FaFrownOpen, FaPlus, FaPlusCircle, } from 'react-icons/fa';
import {MdCatchingPokemon, MdDelete} from 'react-icons/md';
import {GrValidate} from 'react-icons/gr';
import { getAll } from '../api/GetProduct';
import NavBar from '../components/NavBar';
import '../style/Product.css'

function Product(props){
    const [ Product, setProduct ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
        const ProductFetched = getAll();
        console.log(ProductFetched)
        ProductFetched
            .then(result => setProduct(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    



    const [isShown, setIsShown] = useState(false);
    return <div className="main">
    
    <div className="card-list">
        {
            Product.map((Product,key) =>{
                    return <div key={key} className={isShown ? 'cardWithform-On' : 'cardWithform-Off'}>
                        <div className='card'>
                            <div className='name'>
                                {Product.name}
                            </div>
                            <div className='image'>
                                <img src={Product.img} />
                            </div>
                            <div className='descrp'>
                                {Product.description}
                            </div>
                            <div className='price'>
                                {Product.price}
                            </div>

                            <div className='button' >
                                <button oneClick={Product.id} type="submit" class="btn" id="form-button" >Voir le produit</button>
                            </div>
                        </div>
                </div>

            })
        }
        </div>
    </div>;
}

export default Product;