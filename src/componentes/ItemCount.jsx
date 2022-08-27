import {React, useState} from 'react';
import Carrito from './Carrito';




const ItemCount = ({stock, onAdd}) => {            //traigo la propiedad que pase desde itemListcont y la funcion
    const [cont, setCont] = useState(1); 
    
    function sumar (){
        if (cont < stock){
        setCont(cont + 1)
    }
    }
    function restar(){
        if(cont>1)
        setCont(cont - 1)
    }
    function reset(){
        setCont (1)
    }

    return (

        <div>
            <div>
                <h1>Contador</h1>
                <p>Stock: {stock} </p>
                <p>Cantidad: {cont} </p>
     
                <div>
                    <button className="btn btn-success" onClick={sumar}>+</button>
                    <button className="btn btn-success" onClick={reset}>Reset</button>
                    <button className="btn btn-success" onClick={restar}>-</button>
                </div>
                <button className="btn btn-success" onClick={()=>onAdd(cont)}>Agregar</button>  {/*con el onclick llamo a la funcion onAdd y le paso el valor de cont*/}
            </div>
            
        </div>
        
        

    );
}

export default ItemCount;