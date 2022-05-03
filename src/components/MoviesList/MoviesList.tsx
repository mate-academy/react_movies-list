import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

import { Moovies } from '../types/Moovie';

type Props = {
  movies: Moovies[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    ))}
  </div>
);
