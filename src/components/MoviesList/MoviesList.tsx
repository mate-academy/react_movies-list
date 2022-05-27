import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movies } from '../../react-app-env';

interface Props {
  movies: Movies[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movies={movie} key={movie.imdbId} />
    ))}
  </div>
);
