import { useState } from 'react'
import './App.css'
import BoardRefresh from './BoardRefresh/BoardRefresh'
import Turnos from './Turnos'
import Winner from './Winner'

function App() {

  const [turno, setTurno] = useState(() => {
    let updateTurno = localStorage.getItem("turno")
    return updateTurno ? JSON.parse(updateTurno) : true

  })

  const [tabla, setTabla] = useState(() => {
    let localBoard = localStorage.getItem("tabla")
    return localBoard ? JSON.parse(localBoard) : Array(9).fill(null)})

  const [winner, setWinner] = useState(null)
  const [draw, setDraw] = useState(false)

  const posiciones = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  function convalidarPosiciones(newTabla){
    posiciones.map(elem => {
      let [a,b,c] = elem

      if(newTabla[a] === newTabla[b] && newTabla[b] === newTabla[c] && newTabla[a] === newTabla[c]
        && newTabla[a] !== null && newTabla[b] !== null && newTabla[c] !== null){
          setWinner(newTabla[a])
          console.log(winner);
      }
    })
  }

  function validarEmpate(newTabla){
     
    if(newTabla.every(elem => elem !== null)){
      setDraw(true)
  }
}

function resetGame(){
  setTabla(Array(9).fill(null))
  setTurno(true)
  setWinner(null)
  setDraw(false)
}

  return (
    <>
     <h1>Ta Te Ti</h1>
      <Winner  winner={winner} resetGame={resetGame} draw={draw}/>
        <BoardRefresh tabla={tabla} turno={turno} setTurno={setTurno} setTabla={setTabla} validarEmpate={validarEmpate} convalidarPosiciones={convalidarPosiciones} winner={winner}/>
         <Turnos turno={turno}/>
    </>
  )
}

export default App
