import React from 'react';
import './MoviesList.scss';

import { MovieCards } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCards movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
