import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      ))}
    </>
  );
};
