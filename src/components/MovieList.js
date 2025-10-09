import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  console.log(movies);
  
  // Early return if movies is null or not an array
  if (!movies) {
    return null;
  }
  
  return (
    <div className="px-6">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              name={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
