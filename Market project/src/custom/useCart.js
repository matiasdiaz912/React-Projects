const useCart = () => {
  const state = [];
  function reducer(state, action) {
    switch (action.type) {
      case "AGREGAR_CARRITO": {
        const isInCart = state?.findIndex((prod) => prod.id === action.id);

        if (isInCart >= 0) {
          const newCarrito = structuredClone(state);
          newCarrito[isInCart].cantidad++;
          return newCarrito;
        } else {
          const newCart = [...state, { ...action.product, cantidad: 1 }];
          return newCart;
        }
      }
      case "DELETE_PRODUCT": {

        const newCart = state.filter((prod) => prod.id !== action.id);
        return newCart;

      }

      case "CLEAN_CART": {
        return [];
      }
    }
  }

  return {state, reducer}
};

export default useCart;
