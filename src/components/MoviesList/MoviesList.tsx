import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies" data-cy="card">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
