import React from 'react';
import './header.css'
import BarraMenu from './navBar' 
import Form from './formulario'
import Carrito from './iconoCarrito'




const header = () => {
    return (
<div className="container-fluid estiloHeader">
<div className="row">
        <div className='col-md-12 '>
            
            <h1 >BULSARA GROW SHOP</h1>
            </div>

    <div className="row">
            <div className='displayMenu col-md-8'>
                
            <BarraMenu/>
            
            </div>
            
            <div className='displayCarrito col-md-4'>
            <Form contBuscar="Productos"/>
            <Carrito/>
            </div>
            </div>
            </div>  
            </div>          
            
    );
}

export default header;
