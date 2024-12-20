import React, { useState } from "react";
import SearchPage from "./Components/SearchPage";
import MovieDetails from "./Components/MovieDetails";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (movies) => {
    setSearchResults(movies); // Store all the search results
    setSelectedMovie(null); // Reset selected movie
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie); // Set the selected movie for details view
  };

  return (
    <div>
      {!selectedMovie ? (
        <>
          <SearchPage onSearch={handleSearch} />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Search Results</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {searchResults.map((movie) => (
                <div
                  key={movie.imdbID}
                  style={{
                    margin: "10px",
                    cursor: "pointer",
                    width: "150px",
                    textAlign: "center",
                  }}
                  onClick={() => handleMovieSelect(movie)} // Click to select a movie
                >
                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                    alt={movie.Title}
                    style={{ width: "100px", height: "150px" }}
                  />
                  <p>{movie.Title}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <MovieDetails movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;
