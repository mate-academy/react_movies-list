import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MoviesArray = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesArray> = ({ movies }) => (
  <div className="movies">
    {movies.map((movieItem) => (
      <MovieCard movie={movieItem} key={movieItem.imdbId} />
    ))}
  </div>
);
