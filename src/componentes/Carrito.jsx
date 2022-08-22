import React from 'react';
import './Carrito.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core';


const Carrito = () => {
    return (
        <div className="estiloIcono">
        <a href=""><FontAwesomeIcon icon=  {faCartShopping} /></a>
        
        </div>
    );
}

export default Carrito;
