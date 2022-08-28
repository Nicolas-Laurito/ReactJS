import {React, useState, useEffect} from 'react';
import ItemCount from './ItemCount';



const productos= [
    {id:1 , nombre:"Top Candy", descripcion:"Fertilizante de floracion. Potencia el aroma de las flores incrementa la resina.Aumento de volumen floral", precio:500, img:"../componentes/Fertilizantes/f1.jpeg", categoria:"Fertilizante", stock:20},
    {id:2 , nombre: "Top Bloom", descripcion:"Fertilizando de Floracion. Favorece el desarrollo de racimos florales", precio:600, img:"" , categoria:"Fertilizante" , stock:15},
    {id:3 , nombre:"Fertilizante para raices", descripcion:"Raices Fuertes y sanas. Reduce el estres en trasplantes", precio:650, img:"" , categoria:"Fertilizante", stock:18} ,      
    {id:4 , nombre:"Plaguicida 4 en 1", descripcion:"Contiene Aceite de Neem, Jobon Potasico, tierra de diatomeas y canela.", precio:200, img:"" , categoria:"Sustratos", stock:25},
    {id:5 , nombre:"Aceite uro de Neem", descripcion:"Combate, previene y controla plagas", precio:150, img:"" , categoria:"Sustrato", stock:13},
    {id:6 , nombre:"Gel enraizante para produccion de esquejes", descripcion:"Promueve el crecimiento", precio:150, img:"" , categoria:"Sustrato", stock:30},
    {id:6 , nombre:"Kit Completo Pot", descripcion:"Flores Compactas+Fomenta el crecimiento+FErtilizante Biomineral+Produccion de Flores", precio:200, img:"" , categoria:"Otros", stock:25},
    {id:6 , nombre:"Nutri Pack Namaste", descripcion:"Raices Sanas y fuertes+Mejora Resinas, aromas y gustos+Tallos y ramas fuertes+Potenciador de Florestacion+Prevencion de plagas y hongos", precio:200, img:"" , categoria:"Otros", stock:23},
    {id:6 , nombre:"Macetas Mad Rocket", descripcion:"Guiadores de raices y ventanas para la autopoda radicular", precio:250, img:"" , categoria:"Otros", stock:7}
]


const ItemList = () => {
    
    const [prod, setProd] =useState([]);   //inicio en un array vacio

    useEffect(() => {
        
        
   const productosJSX = productos.map((producto)=>
            <div className="card"  key={producto.id} style={{width: '15rem'}}>
                <img src={producto.img} className="card-img-top"  />
                <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Descripcion: {producto.descripcion}</p>
                <p className="card-text">Precio: ${producto.precio}</p>
                </div>
                <ItemCount stock={producto.stock}/>
            </div>
                
    )
    
    setProd(productosJSX)  
        

}, []);

    

  

    return (
        <div className='row'>
          {prod}
        </div>
    );

    }
export default ItemList;


