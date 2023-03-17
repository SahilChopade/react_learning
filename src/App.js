import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=1973dbb0";
const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Title: "Batman v Superman: Dawn of Justice",
  Type: "movie",
  Year: "2016",
  imdbID: "tt2975590",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
