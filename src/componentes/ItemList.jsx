import React from 'react';
import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';


const ItemList = ({productos}) => {
    
    console.log(productos)


    return (
        <>
            
        {productos.map((unProducto)=>(<Item  key={unProducto.id} nombre={unProducto.nombre} descripcion={unProducto.descripcion}  precio={unProducto.precio} stock={unProducto.stock} img={unProducto.img} />))}
        

        
        </>
       
    );
}
export default ItemList;


