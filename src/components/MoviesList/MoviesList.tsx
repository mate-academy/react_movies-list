import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Movies = {
  movies: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies &&
      movies.length > 0 &&
      movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} data-cy="Movie" />
      ))}
  </div>
);
