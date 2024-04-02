import './App.css'
import Products from './products/products'
import Filtros from './filtros/Filtros'
import Cart from './cart/cart'
import CartProvider from './context/cartContext'


function App() {

  return (
    <div>
      <CartProvider>
      <Cart />
      <Filtros/>
      <h1>Dummy Market</h1>
      <Products/>
      </CartProvider>

    </div>
  )
}

export default App
