import React from 'react';
import Header from './Header' 
import ItemListContainer from './ItemListContainer';
import ItemCount from './ItemCount';


const App = () => {
    return (
        <>
      
        <Header />                      {/*traigo todo lo que forma el header */}

        <ItemListContainer/>            {/*traigo el componente que a su vez trae el compronente itemcount*/}
        
    
        </>
    );
}

export default App;
