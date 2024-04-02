const Movies = ({newMovies}) => {

  return (
    <main>
          {newMovies ? 
        newMovies.map(elem => {
          return(
            <div key={elem.imdbID}>
              <h3 className="infoAPI">{elem.Title}</h3>
                <p className="infoAPI">{elem.Year}</p>
                <img src={elem.Poster} alt={elem.Title} />
            </div>
          )
        })
        : newMovies?.Error
      }
    </main>
  )
}

export default Movies