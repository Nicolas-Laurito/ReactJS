import React from 'react';
import './Item.css'






const Item = ({ nombre, precio, img}) => {
    
    
    return (
        <>
            <div className="card"  style={{width: '15rem'}}>
            <img src={img} className="estiloCard card-img-top"  alt='Imagen' />
            <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Precio: ${precio}</p>
            </div>
            <button className="btn btn-success">Ver</button>
            
        </div>
        
        </>
    );
}

export default Item;
