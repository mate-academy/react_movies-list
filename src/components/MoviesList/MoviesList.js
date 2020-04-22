import React from 'react';
import './MoviesList.scss';
import {MovieCard} from "../MovieCard";

export const MoviesList = ({movies}) => (
  <div className="movies">
    {movies.map(el => <MovieCard movie={el}/>)}
  </div>
);
