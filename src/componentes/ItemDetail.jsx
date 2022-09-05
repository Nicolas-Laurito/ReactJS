import {React, useState, useEffect} from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({prodSelec, id}) => {




    
    const [selec, setSelec] = useState ({})
    console.log(prodSelec)
    console.log(id)

    useEffect(() => {
    
    setSelec(prodSelec.find(produ => produ.id===id))
    console.log(selec)

   }, []);


    return (
        <div>
            <div className="card"  style={{width: '15rem'}}>
            <img src={selec.img} className="estiloCard card-img-top"  alt='Imagen' />
            <div className="card-body">
            <h5 className="card-title">{selec.nombre}</h5>
            <p className="card-text">Descripcion: {selec.descripcion}</p>
            <p className="card-text">Precio: ${selec.precio}</p>
            </div>
            <ItemCount stock={selec.stock}/>
            </div>
        </div>
    );
}

export default ItemDetail;
