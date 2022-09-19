import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { isFocusable } from '@testing-library/user-event/dist/utils';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () => {
    const [prod, setProd] =useState([]);   //inicio en un array vacio
    const {categoria} = useParams()

   
    useEffect(() => {
      
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoria) {
          const queryFilter = query(queryCollection, where('categoria', "==", categoria))
          getDocs(queryFilter)
          .then(res=>setProd(res.docs.map(product =>({ id: product.id, ...product.data()}))))
        }else {
          getDocs(queryCollection)
          .then(res=>setProd(res.docs.map(product =>({ id: product.id, ...product.data()}))))
        }
        // fetch('../data/data.json')
        //     .then((res) => res.json())
            
        //     .then((data) => {
        //         data = data.productos
        
        //         setProd(data.filter(produ=>produ.categoria===categoria))
        //     })
          
        //     .catch((error) => console.error(error))

},[categoria] );

    
return (
       
        <div className='row'>
            <ItemList productos= {prod}/>
        </div>
   );
}

export default ItemListContainer;
