import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import "./cart.scss";

function CartItem({ cart, setCart }) {
  const { deleteProduct, productsCart,  agregarAlCarrito} = useContext(cartContext);

  return (
    productsCart &&
    productsCart.map((elem) => {
        const producto = elem
      return (
        <div key={producto.id} className={cart ? "cartProducts" : "cartHidden"}>
          <img src={producto.thumbnail} alt={producto.title} />
          <h4>{producto.title}</h4>
          <p>{producto.description}</p>
          <p>${producto.price}</p>

          <strong>Cantidad: {producto.cantidad}</strong>
          <button onClick={() => agregarAlCarrito(producto)}>+</button>
          <button onClick={() => deleteProduct(producto)}>X</button>
        </div>
      );
    })
  );
}

export default CartItem;
