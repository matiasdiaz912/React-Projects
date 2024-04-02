import './App.css'
import useCapture from './hooks/useCapture'

function AppOld() {

  const {error, loading, number, handleClick} = useCapture()

  return (
    <div>
      { error ? <h1>{error}</h1> : loading ? <svg viewBox="25 25 50 50"><circle r="20" cy="50" cx="50"></circle> </svg> 
      : <div>
        <h1>{number}</h1>
        <button disabled={error} onClick={handleClick} className='refreshButton'>Recargar</button>
        </div>
  }
    </div>
  )
}

export default AppOld
