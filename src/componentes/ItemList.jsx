import {React, useState, useEffect} from 'react';
import ItemCount from './ItemCount';




const ItemList = ({arrayProd}) => {
    
    const [prod, setProd] =useState([]);   //inicio en un array vacio

    useEffect(() => {
        

   const productosJSX = arrayProd.map((producto)=>
            <div className="card"  key={producto.id} style={{width: '15rem'}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Descripcion: {producto.descripcion}</p>
                <p className="card-text">Precio: ${producto.precio}</p>
                </div>
                <ItemCount/>
            </div>
                
    )
    
    setProd(productosJSX)  
        

}, []);

    

  

    return (
        <div className='row'>
          {prod}
        </div>
    );

    }
export default ItemList;


