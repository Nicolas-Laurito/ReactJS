import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const prodBuscar=1
 const [desc , setDesc] = useState ({})
 
 useEffect(() => {
    
    fetch ('./data/data.json')
    .then(response => response.json())
    .then(data => {
        Object.values(data).map((productos)=>
        setDesc(productos)
        
              
        )
        
  
    })
console.log(desc)


 }, []);
   
    return (
        <>
        <ItemDetail prodSelec={desc} id={prodBuscar} />
        </>
    );
}

export default ItemDetailContainer;
