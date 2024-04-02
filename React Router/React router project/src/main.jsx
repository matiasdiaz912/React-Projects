import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './routes/about'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'
import Contacts from './routes/Contacts'
import Contact from './routes/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[{ 
      path: "/",
      element: <About />
  }]
  },
  {
    path: "contactos",
    element: <Contacts />,
  },
  {
    path: "contactos/contacto/:contact",
    element: <Contact />,
    loader: async ({params}) => {
      // console.log(params);
      return fetch("https://jsonplaceholder.typicode.com/users");
    },
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
