import React from 'react';
import './iconoCarrito.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'


const iconoCarrito = () => {
    return (
        <div className="estiloIcono">
        <FontAwesomeIcon icon=  {faCartShopping} />

        </div>
    );
}

export default iconoCarrito;
