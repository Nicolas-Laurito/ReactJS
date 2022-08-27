import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {

    function onAdd(cont){
        console.log(`Se han seleccionado ${cont} productos`)
    }


    return (
        <>
            <ItemCount stock={10} onAdd={onAdd}/>         {/*traigo el componente itemcount pero antes le paso como propiedad al componente el valor que quiero que tenga el stock y una funcion*/}

        </>
    );
}

export default ItemListContainer;
