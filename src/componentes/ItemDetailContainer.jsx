import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {getFirestore, doc, getDoc,} from 'firebase/firestore';



const ItemDetailContainer = () => {
        
const {id} = useParams()
const [desc , setDesc] = useState ({})

useEffect(() => {
  
    const querydb = getFirestore();
    const queryDoc  = doc(querydb, 'productos', id);
    getDoc(queryDoc)
    .then(res => setDesc({id:res.id, ...res.data()}))

    // fetch('../data/data.json')
    // .then((res) => res.json())
    
    // .then((data) => {
    //     Object.values(data).map((productos) =>
        
    //     setDesc(productos.find(produ => produ.id === Number(id))))
        
        
    // })
    
    
    // .catch((error) => console.error(error))
    // console.log(id)




}, [id])
   console.log(desc)
return (
    <>
     <ItemDetail unProducto={desc} />
    </>
    );
}

export default ItemDetailContainer;
