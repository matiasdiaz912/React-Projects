import { useRef, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import useGetMovies from "./hooks/useGetMovies";
import debounce from "just-debounce-it";

function App() {

   const [search, setSearch] = useState("")
   const [sort, setSort] = useState(false)
   const [error, setError] = useState("")
   const firstInput = useRef(true)

   const {newMovies} = useGetMovies(search)

   const getMoviesAtTime = debounce((newSearch) => {
    setSearch(newSearch) 
   }, 500)
   
   function handleEditions(){
     setSort(!sort)
    newMovies.sort((a,b) => a.Year + b.Year)
  }
  

    function handleChange(event){
    if(firstInput.current){
      firstInput.current = search !== ""
      return
    }
 
        let newSearch = event.target.value
        getMoviesAtTime(newSearch)

        let regExp = /^\d+$/
      
        if(regExp.test(newSearch)){
          setError("No se pueden ingresar numeros")
          return 
        }else if(newSearch === "" ){
        setError("No se pueden ingresar un input vacio")
        return 
       }
         setError("")
    }


  return (
    <div>
      <h1>Buscador de peliculas</h1>
      <form>
        <input onChange={handleChange} name="search" className={search || firstInput.current ? `searchInput` : "SearchInputError"} type="text" placeholder="Marvel, Matrix ..." />
        <input type="radio" onClick={handleEditions}/>
        <button className="buttonSearch">Buscar</button>
      </form>
      <h4>{error}</h4>

        <Movies newMovies={newMovies}/>
      
    </div>
  );
}

export default App;
