import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './componentes/header/Header';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import {CartProvider} from './componentes/Context/CartContext';





const App = () => {
    return (
        <>
         <CartProvider>
        <BrowserRouter>
        
                <Header/>                  
            <Routes>
                <Route path= '/' element={<h1>Bienvenidos</h1>}></Route>                      
                <Route path= '/categoria/:categoria' element={<ItemListContainer/>}></Route>                      
                <Route path= '/detalles/:id' element={<ItemDetailContainer/>}></Route>    
                <Route path= '/cart' element={<Cart/>}></Route> 
                
                
            </Routes>
            
        </BrowserRouter>
        </CartProvider>
        </>
    );
}

export default App;
