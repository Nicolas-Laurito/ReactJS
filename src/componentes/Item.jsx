import React from 'react';
import './Item.css'
import ItemCount from './ItemCount';





const Item = ({ nombre, descripcion, precio, stock, img}) => {
    
    
    return (
        <>
            <div className="card"  style={{width: '15rem'}}>
            <img src={img} className="estiloCard card-img-top"  alt='Imagen' />
            <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            {/* <p className="card-text">Descripcion: {descripcion}</p> */}
            <p className="card-text">Precio: ${precio}</p>
            </div>
            {/* <ItemCount stock={stock}/> */}
            
        </div>
        
        </>
    );
}

export default Item;
