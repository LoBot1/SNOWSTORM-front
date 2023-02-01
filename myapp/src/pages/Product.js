import React, { useEffect, useInsertionEffect, useState } from 'react';
import { getAll } from '../api/GetProduct';

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
                            <div id='inimage'>

                                <img src={Product.img} alt='inimage' id='image'/>
                                        <button oneClick={Product.id} type="submit" class="btn" id="button" >Voir le produit</button>
                            </div>
                        </div>
                </div>

            })
        }
        </div>
    </div>;
}

export default Product;