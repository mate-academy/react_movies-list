import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MoviesTypes = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesTypes> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
