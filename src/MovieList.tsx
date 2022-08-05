import React from 'react';
import { Movie } from './types/movie';
import { MovieCard } from './MovieCard';
import './MovieCard.scss';

export type Props = {
  movies: Movie[];
};

export const MovieList: React.FC<Props> = ({ movies }) => (
  <div className="movies">

    {movies.map(movie => (
      <MovieCard
        movie={movie}
        key={movie.imdbId}
      />
    ))}
  </div>
);
