import React from 'react';
import Header from './componentes/header/Header';
import ItemListContainer from './componentes/ItemListContainer';
import Item from './componentes/Item';





const App = () => {
    return (
        <>
        <Header/>                      {/*traigo todo lo que forma el header */}
        
        <Item/> 
        </>
    );
}

export default App;
