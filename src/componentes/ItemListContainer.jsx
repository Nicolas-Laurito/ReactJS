import React from 'react';

import ItemList from './ItemList';

const ItemListContainer = () => {

    // function onAdd(cont){
    //     console.log(`Se han seleccionado ${cont} productos`)
    // }


    return (
        <>
             {/* <ItemCount onAdd={onAdd}/>         traigo el componente itemcount pero antes le paso como propiedad al componente el valor que quiero que tenga el stock y una funcion */}
            <ItemList/>
        </>
    );
}

export default ItemListContainer;
