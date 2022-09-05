import React from 'react';
import Header from './componentes/header/Header';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';





const App = () => {
    return (
        <>
        <Header/>                      {/*traigo todo lo que forma el header */}
        <ItemListContainer/>
        <ItemDetailContainer/>
        
        </>
    );
}

export default App;
