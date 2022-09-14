import React, {createContext, useState} from 'react';



const CartContext =createContext();  
// creo el contexto



const CartProvider =(props)=>{

    const [carrito, setCarrito] = useState();

    const addCart = (unProducto, cont) => {
  
        console.log(cont)

        //hacer funcion donde compare si el producto que viene ya esta en el carrito, solo agregar la cantidad, sino agregar todo
        
        //     const nuevoProd = unProducto.find(prodAgregado => prodAgregado.id === unProducto.id)
    

    // if (nuevoProd){

    //     setCarrito([...nuevoProd, {cantidad: + cont}])

    // }else{
    //     setCarrito([...nuevoProd, {cantidad: cont}])
    // }


}

    return (
        <>
            <CartContext.Provider value={{carrito, addCart}}>         {/*devuelvo el contexto que cree*/}   

                {props.children}
            </CartContext.Provider>
        </>
    )



}

    
    



export {CartContext, CartProvider};       //exporto el contexto y el hook
