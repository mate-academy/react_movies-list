import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </>
);
