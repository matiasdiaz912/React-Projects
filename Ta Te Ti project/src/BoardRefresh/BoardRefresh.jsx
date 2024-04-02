import React, { useEffect } from 'react'

const BoardRefresh = ({convalidarPosiciones, validarEmpate, winner, turno, tabla, setTurno, setTabla}) => {


    function handleClick (index){
        if(tabla[index] !== null || winner !== null) return 
        
        const newTabla = [...tabla]
        newTabla[index] = turno ? "X" : "O"
        setTabla(newTabla)
        setTurno(!turno)

        localStorage.setItem("tabla", JSON.stringify(newTabla))
        localStorage.setItem("turno", !turno)
        
        convalidarPosiciones(newTabla)
        validarEmpate(newTabla)
      }

  return (
    <div className='cuadro'>
    {tabla.map((elem, index) =>{
      return(
        <div key={index} className='cuadrado' onClick={() => handleClick(index)}>
            {tabla[index]}
        </div>
      )
    })}
 </div>
  )
}

export default BoardRefresh