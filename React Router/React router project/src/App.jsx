import './App.css'
import { Outlet, Link} from 'react-router-dom'

function App() {

  return (
    <div>

        <h1>React Router</h1>

    <Link to={"contactos"}>Ir a Contactos</Link>
      <Outlet />
   </div>
  )
}

export default App
