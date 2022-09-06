import {React, useState, useEffect} from 'react';
import ItemCount from './ItemCount';



const ItemDetail = ({unProducto}) => {
  

    return (
        <div>
            <p>{unProducto}</p>
            {/* <div className="card" key={unProducto.key}  style={{width: '15rem'}}>
            <img src={unProducto.img} className="estiloCard card-img-top"  alt='Imagen' />
            <div className="card-body">
            <h5 className="card-title">{unProducto.nombre}</h5>
            <p className="card-text">Descripcion: {unProducto.descripcion}</p>
            <p className="card-text">Precio: ${unProducto.precio}</p>
            </div>
            <ItemCount stock={unProducto.stock}/>
            </div> */}
        </div>
    );
}

export default ItemDetail;
