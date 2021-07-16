import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

import moviesArray from '../../api/movies.json';

export const MoviesList = () => (
  <div className="movies">
    {moviesArray.map(element => (
      <MovieCard {...element} />
    ))}
  </div>
);
