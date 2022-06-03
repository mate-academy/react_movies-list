import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[],
}
export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);
