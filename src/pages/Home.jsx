import { useState, useEffect } from "react"
import MoviesCard from "../components/MoviesCard"

const moviesURL = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apikey}`;

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MoviesCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home