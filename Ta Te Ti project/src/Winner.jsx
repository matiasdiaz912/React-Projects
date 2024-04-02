import React from 'react'

const Winner = ({winner, resetGame, draw}) => {

  return (
    <div>
             {winner !== null && 
        <div className='closeGame'>

            {

            <div>
                <h2> El Ganador es</h2>
                <h1 className='ganador'>{winner}</h1> 
            </div>

            }

            <button onClick={resetGame}>Jugar de Nuevo</button>

        </div>}

            {draw && winner === null && 
            <div className='closeGame'>
                <h2> Empate</h2>
            <button onClick={resetGame}>Jugar de Nuevo</button>

            </div>}
     </div>
            )
}

export default Winner