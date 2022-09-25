import { collection, addDoc } from 'firebase/firestore';
import React, {useState, useContext} from 'react';
import { CartContext } from './Context/CartContext';
import db from '../Firebase/Firebase';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';






const FinalizarCompra = () => {

const {cart,getTotal, clear} = useContext(CartContext);     //lo que traigo del context

//CREO UN USESTATE PARA GUARDAR LA ORDEN Y MOSTRARSELA AL CLIENTE
const [numeroOrden, setnumeroOrden] = useState();

//creo el useState con un objeto vacio
const [comprador, setcomprador] = useState({        
    nombre:"",
    email:"",
    telefono:""
});

const {nombre, email, telefono} = comprador


//CREO UNA FUNCION PARA MANDAR LA ORDEN DE COMPRA GENERADA A LA BASE DE FIREBASE
const generarOrden=async(data)=>{               //genero una funcion asincrona para poder guardar los datos en la base de datos de firebase
try {
 const col = collection (db, "Orden")       //llamo a la coleccion donde voy a guardar la orden de compra
 const orden = await addDoc(col, data)            //con el metodo addDoc (que tengo que importar arriba) mando la colecion y los datos que le pase a la funcion
 setnumeroOrden(orden.id)                       //guardo en una variable el ID que genero al crear la orden en firebase
 clear()                                    //vacio el carrito
} catch (error) {
    console.log(error)
}

}


//CREO UNA FUNCION QUE RECIBE COMO PARAMETRO UN EVENTO DONDE VOY GUARDANDO EN MI VARIABLE LOS DATOSINGRESADOS POR EL USUARIO
const cambiosForm = (e) =>{                     
    setcomprador(({
        ...comprador,
        [e.target.name]: e.target.value     

    }))
}

//CREO UNA FUNCION PARA GUARDAR LOS DATOS DE LA COMPRA Y DEL FORMULARIO
const formulario =(e) =>{           //obtengo los datos que luego voy a guardar en la base de datos de firebase
    e.preventDefault()          //con el prevent default evito que se recargue la pagina
    const items = cart.map(e=>{return{id:e.id, title:e.nombre, price:e.precio, cantidad:e.cantidad}})
    const dia = new Date()
    const total = getTotal()
    const data = {comprador, items, dia, total}
    generarOrden(data)
    
}

const mensaje =(orden) =>{
    Swal.fire({
        title: 'Gracias por su compra!!!!',
        text: `Su numero de orden de compra es: ${orden}`,
        confirmButtonText: 'Aceptar',
        
})
}


    return (
        <>
        {!numeroOrden? <div>
        <form onSubmit={formulario} >
            <h1>Completar Datos</h1>
            <input type="text" name="nombre" placeholder='Nombre' value={nombre} onChange={cambiosForm} />  <br></br>      {/*en value va lo que guarde como atributo de la variable comprador*/}
            <input type="text" name="email" placeholder='email' value={email} onChange={cambiosForm} />    <br></br>
            <input type="number" name="telefono" placeholder='Telefono' value={telefono} onChange={cambiosForm} />    <br></br>
            
            <input type="submit" name="comprar" className='btn btn-success' />    
        </form> </div> :
              
           mensaje(numeroOrden)
}
   
        </>
    );
}

export default FinalizarCompra;
