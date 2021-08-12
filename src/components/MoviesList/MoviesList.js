import React, { useLayoutEffect } from 'react';
import './MoviesList.scss';
import {MovieCard} from './MovieCard/';

export const MoviesList = ({movies}) => ( 
  <ul>
    {movies.map(movie => (
      <li key = {movie.imdbId}>
        <MovieCard {...movie}/>
      </li>
    ))}
  </ul>
);
