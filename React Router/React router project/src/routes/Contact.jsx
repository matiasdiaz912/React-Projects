import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Contact = () => {

const {contact} = useParams()

const contacts = useLoaderData();

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        {contact}
        <h4>Mensajes</h4>
        <div>
        {
          contacts.map(contact => {
            return(
              <div key={contact.id}>
                {contact.name}
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default Contact