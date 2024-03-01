import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MoviesProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesProps> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
