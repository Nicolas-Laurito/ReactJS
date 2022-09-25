import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div>
            <form class="estilosForm" action="" name="miFormulario" method="post"  netlify >
            <div class="form-group ">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="nombre" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="ciudad" class="form-control" id="exampleFormControlInput1" placeholder="Pais/Localidad/Ciudad"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="text" name="telefono" class="form-control" id="exampleFormControlInput1" placeholder="Telefono"></input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1"></label>
              <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Como Nos Conocistes?</label>
                <select class="form-control" id="exampleFormControlSelect1" name="comoNosConociste">
                  <option></option>
                  <option>Redes Sociales</option>
                  <option>Buscador Web</option>
                  <option>Recomendacion de alguien</option>
                
                </select>
              </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="mensaje" placeholder="Ingrese Su consulta"></textarea>
            </div>
            <input class="btn btn-success estiloBoton" type="submit" value="Enviar"></input>
        </form>
        </div>
    );
}

export default Form;
