import React from 'react';
import Header from './componentes/header/Header';
import Item from './componentes/Item';
import ItemListContainer from './componentes/ItemListContainer';





const App = () => {
    return (
        <>
        <Header/>                      {/*traigo todo lo que forma el header */}
        <ItemListContainer/>
        {/* <Item/>  */}
        </>
    );
}

export default App;
