import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  if (!movie) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={onBack} style={{ marginBottom: "20px" }}>
        Back
      </button>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      {movie.Poster && movie.Poster !== "N/A" ? (
        <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default MovieDetails;
