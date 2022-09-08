import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  arrayMovies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ arrayMovies }) => (
  <div className="movies">
    {arrayMovies.map(objMovie => (
      <MovieCard movie={objMovie} />
    ))}
  </div>
);
