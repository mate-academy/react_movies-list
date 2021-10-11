import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  moviesCardList: Movie[],
};

export const MoviesList: React.FC<Props> = ({ moviesCardList = [] }) => (
  <div className="movies">
    {moviesCardList.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);
