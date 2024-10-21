import React from "react";

function MovieDetails({movie, onClose}) {
  return (
    <div className="modal-content">
      <h2><b>title</b>: {movie.title}</h2>
      <br></br>
      <p><b>Year</b>: {movie.year} </p>
      <br></br>
      <p><b>Genre:</b> {movie.genre}</p>
      <br></br>
      <p><b>Description:</b> <br></br> {movie.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default MovieDetails;
