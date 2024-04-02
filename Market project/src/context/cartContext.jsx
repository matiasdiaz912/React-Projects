import { createContext, useReducer } from "react";
import useCart from "../custom/useCart";

export const  cartContext = createContext()


function CartProvider ({children}){

  const {state, reducer} = useCart()
  const [actualState, dispatch] = useReducer(reducer, state)

function agregarAlCarrito(producto){
   dispatch({
    type: "AGREGAR_CARRITO",
    id: producto.id,
    product: producto
   })
}

  function deleteProduct (producto){
    dispatch({
      type: "DELETE_PRODUCT",
      id: producto.id
    })
  }

  function clearCart (){
    dispatch({
      type: "CLEAN_CART"
    })
  }


    return(
        <cartContext.Provider value={{deleteProduct, productsCart: actualState, agregarAlCarrito, clearCart}}>
                {children}
        </cartContext.Provider>
    )
}

export default CartProvider