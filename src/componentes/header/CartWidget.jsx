import {React, useState} from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'




const CartWidget = () => {
    
   
    
    return (
        
        <div className="estiloIcono">
            
        
        <Link to='/Cart'><FontAwesomeIcon icon=  {faCartShopping} /></Link>    
        
        
        </div>
    );
}

export default CartWidget;
