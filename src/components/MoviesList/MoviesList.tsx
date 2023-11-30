import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Movies = {
  movies: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
