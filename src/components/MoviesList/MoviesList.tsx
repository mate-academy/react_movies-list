import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movies';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(itemMovie => (
      <MovieCard key={itemMovie.imdbId} {...itemMovie} />
    ))}
  </div>
);
