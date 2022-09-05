import {React, useState, useEffect} from 'react';
import ItemList from './ItemList';


const productos= [
    {id:1 , nombre:"Top Candy", descipcion:"Fertilizante de floracion. Potencia el aroma de las flores incrementa la resina.Aumento de volumen floral", precio:500, img:"../img/f1.jpeg", categoria:"Fertilizante", stock:20},
    {id:2 , nombre: "Top Bloom", descripcion:"Fertilizando de Floracion. Favorece el desarrollo de racimos florales", precio:600, img:"../img/f2.jpeg" , categoria:"Fertilizante" , stock:15},
    {id:3 , nombre:"Fertilizante para raices", descripcion:"Raices Fuertes y sanas. Reduce el estres en trasplantes", precio:650, img:"../img/f3.jpeg" , categoria:"Fertilizante", stock:18} ,      
    {id:4 , nombre:"Plaguicida 4 en 1", descripcion:"Contiene Aceite de Neem, Jobon Potasico, tierra de diatomeas y canela.", precio:200, img:"../img/sc1.jpeg" , categoria:"Sustratos", stock:25},
    {id:5 , nombre:"Aceite uro de Neem", descripcion:"Combate, previene y controla plagas", precio:150, img:"../img/sc2.jpeg" , categoria:"Sustrato", stock:13},
    {id:6 , nombre:"Gel enraizante para produccion de esquejes", descripcion:"Promueve el crecimiento", precio:150, img:"../img/sc3.jpeg" , categoria:"Sustrato", stock:30},
    {id:7 , nombre:"Kit Completo Pot", descripcion:"Flores Compactas+Fomenta el crecimiento+FErtilizante Biomineral+Produccion de Flores", precio:200, img:"../img/o1.jpeg" , categoria:"Otros", stock:25},
    {id:8 , nombre:"Nutri Pack Namaste", descripcion:"Raices Sanas y fuertes+Mejora Resinas, aromas y gustos+Tallos y ramas fuertes+Potenciador de Florestacion+Prevencion de plagas y hongos", precio:200, img:"../img/o2.jpeg" , categoria:"Otros", stock:23},
    {id:9 , nombre:"Macetas Mad Rocket", descripcion:"Guiadores de raices y ventanas para la autopoda radicular", precio:250, img:"../img/o5.jpeg" , categoria:"Otros", stock:7}
]

function getProductos() {
    return new Promise ((resolve,reject) => {
     if(productos.length>0){
     resolve(productos)
    } else { reject("No hay productos")}
    }
    )
}
    



const ItemListContainer = () => {
    const [prod, setProd] =useState([]);   //inicio en un array vacio

    useEffect(() => {
    
    getProductos()
    .then(productos=>{
        setProd(productos) 
        
    })
    .catch(error=>{
    console.error(error)    
    })
}, []);



    
    return (
        
        <div className='row'>
            <ItemList productos= {prod}/>
            
        </div>

        
    );
}

export default ItemListContainer;
