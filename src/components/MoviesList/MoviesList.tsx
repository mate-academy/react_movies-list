import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';

type MoviesListProps = {
  movies: Movie[],
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard {...movie} />)}
  </div>
);
