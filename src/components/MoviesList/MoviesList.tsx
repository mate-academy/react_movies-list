import React from 'react';
import type { Movie } from '../../types/Movie';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => {
      return (
        <MovieCard
          movie={movie}
          key={movie.imdbId}
        />
      );
    })}
  </div>
);
