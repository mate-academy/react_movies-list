import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

export const MoviesList: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)}
  </div>
);
