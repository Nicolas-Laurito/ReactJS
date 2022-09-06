import {React, useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ({producto}) => {
        
console.log(producto)


const [desc , setDesc] = useState ({})



// const {id}=useParams()

useEffect(() => {
  

    const id= 3

    if(producto.id===id){
        setDesc(producto)
    }

    // setDesc(producto.find((produc => produc.id === Number(id))))

}, [])
   
return (
    <>
     <ItemDetail unProducto={desc} />
    </>
    );
}

export default ItemDetailContainer;
