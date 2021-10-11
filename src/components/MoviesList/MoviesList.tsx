import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../Type/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <MovieCard {...movie} />
    ))}
  </div>
);
