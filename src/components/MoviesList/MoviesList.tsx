import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <>
    {movies.map((movie: Movie) => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    ))}
  </>
);
