import React from 'react';
import './iconoCarrito.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core';


const iconoCarrito = () => {
    return (
        <div className="estiloIcono">
        <a href=""><FontAwesomeIcon icon=  {faCartShopping} /></a>
        
        </div>
    );
}

export default iconoCarrito;
