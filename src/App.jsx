import React from 'react';
import Header from './componentes/header/Header';
import ItemListContainer from './componentes/ItemListContainer';





const App = () => {
    return (
        <>
        <Header/>                      {/*traigo todo lo que forma el header */}
        
        <ItemListContainer/>           {/* traigo el componente que a su vez trae el compronente itemcount*/}
        </>
    );
}

export default App;
