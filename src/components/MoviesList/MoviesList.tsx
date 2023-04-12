import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type MoviesListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
