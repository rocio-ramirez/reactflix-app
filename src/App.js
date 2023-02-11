import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard.jsx";

const API_URL = "https://www.omdbapi.com/?apikey=8adbd64a";

const movie1 = {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
  }

const App = () => {

    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Spiderman");
    }, []);

    return(
        <div className="app">
            <h1>Movieland!</h1>

            <div className="search">
                <input 
                  placeholder="Search for movies"
                  value="Superman"
                  onChange={() => {}}
                />
                <img
                  src={SearchIcon}
                  alt="search"
                  onClick={() => {}}
                />

            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;