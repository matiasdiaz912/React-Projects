import React from 'react'

const Turnos = ({turno}) => {
  return (
    <>
          <div className='turnos'>
          <h2 className={`${turno ? "turnoX" : ""}`}>X</h2>
          <h2 className={`${!turno ? "turnoO" : ""}`}>O</h2>
        </div>
    </>
  )
}

export default Turnos