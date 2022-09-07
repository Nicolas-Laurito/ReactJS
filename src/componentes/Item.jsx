import React from 'react';
import './Item.css'
import {Link} from 'react-router-dom'






const Item = ({ nombre, precio, img, id}) => {
    
    
    return (
        <>
            <div className="card"  style={{width: '15rem'}}>
            <img src={img} className="estiloCard card-img-top"  alt='Imagen' />
            <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Precio: ${precio}</p>
            </div>

            <Link to={`/detalles/${id}`}>
            <button className="btn btn-success">Ver</button>
            </Link>
        </div>
        
        </>
    );
}

export default Item;
