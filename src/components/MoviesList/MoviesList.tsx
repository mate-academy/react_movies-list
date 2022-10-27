import React from 'react';
import './MoviesList.scss';
import { MovieType } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: MovieType[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
