import React from 'react'
import { Link, redirect } from 'react-router-dom'

const Contacts = () => {

  const contactos = [
    "Pedro",
    "Julian",
    "Mateo",
    "Martin"
  ]

  function redirectContact (){
    return redirect("/")
  }

  return (
    <div>
        <h1 onClick={redirectContact}>Contacts</h1>
        <div style={{gap: "20px"}}>
          {
            contactos.map((elem, index) => {
              return (
                <Link key={index} style={{margin: "20px"}} to={`contacto/${elem}`}>{elem}</Link>
              )
            })
          }
        </div>
        <Link to={"/"}>Volver a la home</Link>
    </div>

  )
}

export default Contacts