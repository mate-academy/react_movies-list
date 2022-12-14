import React from 'react';
import './MoviesList.scss';

import { MovieType } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: MovieType[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (<MovieCard key={movie.imdbId} movie={movie} />))}
    </>
  );
};
