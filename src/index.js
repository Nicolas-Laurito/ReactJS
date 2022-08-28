import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App   />     {/*mando como parametro al componente app lo que quiero, un array, objeto, funcion, datos, etc*/}
    
  </React.StrictMode>
);


