import {React,useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from './Context/CartContext';




const ItemDetail = ({unProducto}) => {
    const {addCart} = useContext(CartContext);

    const [carrito ,setCarrito ] = useState (false)
    
    function onAdd (cont) {
        
        setCarrito(true)
        addCart(unProducto, cont)
        let nuevoStock=unProducto.stock - cont
        unProducto.stock=nuevoStock
             
    }       

    return (
        <div  key={unProducto.id}>
            <div className="card" style={{width: '15rem'}}>
            <img src={unProducto.img} className="estiloCard card-img-top"  alt='Imagen' />
            <div className="card-body">
            <h5 className="card-title">{unProducto.nombre}</h5>
            <p className="card-text">Descripcion: {unProducto.descripcion}</p>
            <p className="card-text">Precio: ${unProducto.precio}</p>
            </div>
            <div>
                {carrito ? <Link className="btn btn-success" to='/cart'>Finalizar Compra</Link> :
            <ItemCount stock={unProducto.stock} initial={1} onAdd={onAdd} />
            
        }</div>

            </div>
            
        </div>
    );
}

export default ItemDetail;
