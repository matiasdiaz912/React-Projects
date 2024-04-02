import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

const error = useRouteError()

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {
            error.status === 404 ?  <img src="../public/eror-404.jpg" alt="" /> : error.data
        }
       
    </div>
  )
}

export default ErrorPage