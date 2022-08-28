import React from 'react';
import ItemList from './ItemList';

const productos= [
    {id:1 , nombre:"Top Candy", descripcion:"Fertilizante de floracion. Potencia el aroma de las flores incrementa la resina.Aumento de volumen floral", precio:500, img:"", categoria:"Fertilizante"},
    {id:2 , nombre: "Top Bloom", descripcion:"Fertilizando de Floracion. Favorece el desarrollo de racimos florales", precio:600, img:"" , categoria:"Fertilizante"},
    {id:3 , nombre:"Fertilizante para raices", descripcion:"Raices Fuertes y sanas. Reduce el estres en trasplantes", precio:650, img:"" , categoria:"Fertilizante"} ,      
    {id:4 , nombre:"Plaguicida 4 en 1", descripcion:"Contiene Aceite de Neem, Jobon Potasico, tierra de diatomeas y canela.", precio:200, img:"" , categoria:"Sustratos"},
    {id:5 , nombre:"Aceite uro de Neem", descripcion:"Combate, previene y controla plagas", precio:150, img:"" , categoria:"Sustrato"},
    {id:6 , nombre:"Gel enraizante para produccion de esquejes", descripcion:"Promueve el crecimiento", precio:150, img:"" , categoria:"Sustrato"},
    {id:6 , nombre:"Kit Completo Pot", descripcion:"Flores Compactas+Fomenta el crecimiento+FErtilizante Biomineral+Produccion de Flores", precio:200, img:"" , categoria:"Otros"},
    {id:6 , nombre:"Nutri Pack Namaste", descripcion:"Raices Sanas y fuertes+Mejora Resinas, aromas y gustos+Tallos y ramas fuertes+Potenciador de Florestacion+Prevencion de plagas y hongos", precio:200, img:"" , categoria:"Otros"},
    {id:6 , nombre:"Macetas Mad Rocket", descripcion:"Guiadores de raices y ventanas para la autopoda radicular", precio:250, img:"" , categoria:"Otros"}
]



const Item = () => {
    
    
    return (
        <>
        
         <ItemList arrayProd={productos}/>
        </>
    );
}

export default Item;
