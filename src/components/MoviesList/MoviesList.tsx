import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard movie={movie} />)}
  </div>
);
