import {React, useState} from 'react';


function onAdd(cont){
    console.log(`Se han seleccionado ${cont} productos`)
    
}


const ItemCount = ({stock}) => {            //traigo la propiedad que pase desde itemListcont y la funcion
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
          
                <p>Stock: {stock} </p>
                <p>Cantidad: {cont} </p>
     
                <div>
                    <button className="btn btn-success" onClick={restar}>-</button>
                    <button className="btn btn-success" onClick={reset}>Reset</button>
                    <button className="btn btn-success" onClick={sumar}>+</button>
                </div>
                <button className="btn btn-success" onClick={()=>onAdd(cont)} >Agregar</button>  {/*con el onclick llamo a la funcion onAdd y le paso el valor de cont*/}
            </div>
            
        </div>
        
        

    );
}

export default ItemCount;
