import { useContext } from "react";
import "./products.scss";
import { filterContext } from "../context/filtersContext";
import { cartContext } from "../context/cartContext";

const Products = () => {

  const {content} = useContext(filterContext)

  const {agregarAlCarrito} = useContext(cartContext)

  return (
    <div>

      <main className="products">
        {content &&

          content.slice(0, 10).map((elem) => {
            return (
              <div className="product" key={elem.id}>
                <img src={elem.thumbnail} alt={elem.title} />
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
                <p>${elem.price}</p>

                <button onClick={() => agregarAlCarrito(elem)}>Agregar al carrito</button>
              </div>
            );

          })}
      </main>
    </div>
  );
};

export default Products;
