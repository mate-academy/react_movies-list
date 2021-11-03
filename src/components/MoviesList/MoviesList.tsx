import React from 'react';
import { Movie } from '../../Types/Movie';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => {
      return (
        <MovieCard card={movie} />
      );
    })}
  </div>
);
