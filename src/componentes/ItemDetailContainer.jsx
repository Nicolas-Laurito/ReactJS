import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
        



const [desc , setDesc] = useState ({})
const id = 5
useEffect(() => {
  
    fetch('./data/data.json')
    .then((res) => res.json())
    
    .then((data) => {
        data = data.productos
        setDesc(data.find(unProd => unProd.id===id))
        
    })
    
    
    .catch((error) => console.error(error))
    

}, [])
   
return (
    <>
     <ItemDetail unProducto={desc} />
    </>
    );
}

export default ItemDetailContainer;
