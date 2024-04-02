import { useState, useEffect } from "react";

const useGetMovies = (query) => {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const API_KEY = "601bb462";
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then((res) => res.json())
      .then((data) => setNewMovies(data.Search))
      .catch(err => console.log(err))

  }, [query]);

  return { newMovies };
};

export default useGetMovies;
