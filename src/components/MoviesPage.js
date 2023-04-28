import React from "react";
import { Route } from "react-router-dom";


function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesPage movies={movies} />
    </div>
  );
}
export default MoviesPage;
