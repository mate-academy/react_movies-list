import React from 'react';
import './MoviesList.scss';
import movies from '../../api/movies';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC = () => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
