import "./App.css";
import React, {useEffect, useState} from "react";
import MovieDetails from "./MovieDetails";

function App() {
  const [movielist, setMovielist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/moviedb");
        const result = await response.json();
        setMovielist(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>MovieHub</h1>
      <ul>
        {movielist.map((film, index) => (
          <li key={index}>
            Name: {film.title} <br></br> Year: {film.year} <br></br>Genre:{" "}
            {film.genre} <br></br>
            <button onClick={() => handleMovieSelect(film)}>
              View Details
            </button>
            <br></br> <br></br>
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <div className="modal">
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
        </div>
      )}
    </div>
  );
}

export default App;
