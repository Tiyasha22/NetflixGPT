import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return null;
  return (
    <div className="bg-black pl-10">
      <div className="-mt-40  relative z-20">
        <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
        <MovieList movies={movies.popularMovies} title={"Popular"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
