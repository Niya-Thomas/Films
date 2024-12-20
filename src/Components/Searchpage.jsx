import React, { useState } from "react";

const SearchPage = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const predefinedSearchTerms = ["Guardians of the Galaxy", "Avatar", "The Dark Knight", "Inception", "Interstellar"];

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      alert("Please enter a valid movie name.");
      return;
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=43e171dc&s=${searchTerm}`
      );
      const data = await response.json();

      if (data.Search && data.Search.length > 0) {
        onSearch(data.Search); // Pass all the search results
      } else {
        alert("No movies found!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again.");
    }
  };

  const handlePredefinedSearch = async (term) => {
    setSearchTerm(term);
    handleSearch();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Search for Films</h1>
      <input
        type="text"
        placeholder="Enter movie name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* <div>
        <h2>Or select a predefined movie:</h2>
        {predefinedSearchTerms.map((term) => (
          <button
            key={term}
            onClick={() => handlePredefinedSearch(term)}
            style={{ margin: "5px" }}
          >
            {term}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default SearchPage;
