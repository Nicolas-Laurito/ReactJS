import React from 'react';
import ItemCount from './ItemCount';


const ItemList = ({productos}) => {

    return (
        
        {productos}.map((producto)=>
        <div className="card"  key={producto.id} style={{width: '15rem'}}>
            <img src={producto.img} className="card-img-top"  />
            <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Descripcion: {producto.descripcion}</p>
            <p className="card-text">Precio: ${producto.precio}</p>
            </div>
            <ItemCount stock={producto.stock}/>
            
        </div>

    )
    );
}
export default ItemList;


