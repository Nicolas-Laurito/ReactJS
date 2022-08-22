import React from 'react';
import Header from './Header' 
import ItemListContainer from './ItemListContainer';

const App = () => {
    return (
        <>
        <ItemListContainer greetings={"Bienvenidos"}/>
        <Header />
        </>
    );
}

export default App;
