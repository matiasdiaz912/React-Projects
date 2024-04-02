import './App.css'
import useGetNumbers from './hooks/useQuery'


function App() {

   const randomQuery = useGetNumbers()

  return (
    <div>
      { randomQuery.error ? <h1>{randomQuery.error}</h1> : randomQuery.isFetching ? <svg viewBox="25 25 50 50"><circle r="20" cy="50" cx="50"></circle> </svg> 
      : <div>
        <h1>{randomQuery.data}</h1>
        <button disabled={randomQuery.error} onClick={() => randomQuery.refetch()} className='refreshButton'>Recargar</button>
        </div>
  }
    </div>
  )
}

export default App
