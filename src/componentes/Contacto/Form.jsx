import { clear } from '@testing-library/user-event/dist/clear';
import { addDoc, collection } from 'firebase/firestore';
import React, {useState} from 'react';
import './Form.css'
import db from '../../Firebase/Firebase';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const Form = () => {
   
  const [flag, setFlag] =useState(true)
  const [nuevoMensaje, setnuevoMensaje] = useState({
    nombre:"",
    pais:"",
    telefono:"",
    email:"",
    conociste:"",
    mensaje:"",

  });

  const {nombre, pais, telefono, email, conociste, mensaje} = nuevoMensaje

  const generarMensaje= async(nuevoMensaje)=>{
    try{
      const col = collection (db, "Mensajes")
      const mensajes = await addDoc(col, nuevoMensaje)
      setnuevoMensaje(mensajes)
    } catch (error){
      console.log(error)
    }
  }

  const cambiosForm = (e) =>{
    e.preventDefault()
    const nombre = e.target.nombre.value
    const ciudad = e.target.ciudad.value
    const telefono = e.target.telefono.value
    const email = e.target.email.value
    const comoNosConociste = e.target.comoNosConociste.value
    const mensaje = e.target.mensaje.value
    const mensajeNuevo = {nombre, ciudad, telefono, email, comoNosConociste, mensaje}
    console.log(mensajeNuevo)
    Swal.fire({
      title: 'Gracias por su mensaje!!!!',
      confirmButtonText: 'Aceptar ' ,
    })

    generarMensaje(mensajeNuevo)
    setFlag(false)
    
  }
  
 
 
 
  
  
  return (
            <>
            {flag ? 
            <form onSubmit={cambiosForm} className="estilosForm" action="" name="miFormulario" method="post"  netlify >
            <div className="form-group ">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="nombre" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre"  data-aos="fade-right" data-aos-duration="1500"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="ciudad" className="form-control" id="exampleFormControlInput1" placeholder="Pais/Localidad/Ciudad" data-aos="fade-left" data-aos-duration="1500"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="telefono" className="form-control" id="exampleFormControlInput1" placeholder="Telefono" data-aos="fade-right" data-aos-duration="1500"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" data-aos="fade-left" data-aos-duration="1500"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1" data-aos="fade-right" data-aos-duration="1500">Como Nos Conocistes?</label>
                <select className="form-control" id="exampleFormControlSelect1" name="comoNosConociste"  data-aos="fade-right" data-aos-duration="1500">
                  <option></option>
                  <option>Redes Sociales</option>
                  <option>Buscador Web</option>
                  <option>Recomendacion de alguien</option>
                
                </select>
              </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="mensaje" placeholder="Ingrese Su consulta" data-aos="flip-up" data-aos-duration="1500"></textarea>
            </div>
            <input className="btn btn-success estiloBoton btnBot" type="submit" value="Enviar" />
        </form>:
        <Link to='/' className="btn btn-success estiloBoton btnBot1">Inicio</Link>
    }
  </>        
    );
}

export default Form;
