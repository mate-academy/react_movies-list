import React from 'react';
import './MoviesList.scss';
import { MovieList } from '../../types/Movie';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<MovieList> = ({ movies = [] }) => (
  <>
    {movies.map((movie) => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </>
);
