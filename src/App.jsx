import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './componentes/header/Header';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';





const App = () => {
    return (
        <>
        {/* <Header/>
        <ItemListContainer/>
        <ItemDetailContainer/> */}

        <BrowserRouter>
        
                <Header/>                  
            <Routes>
                <Route path= '/' element={<h1>Bienvenidos</h1>}></Route>                      
                <Route path= '/categoria/:categoria' element={<ItemListContainer/>}></Route>                      
                <Route path= '/detalles/:id' element={<ItemDetailContainer/>}></Route>    
                
                
                
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
