import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

interface MovieProps {
  movies: Movie[],
}

export const MoviesList: React.FC<MovieProps> = ({ movies }) => (

  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        movie={movie}
        key={movie.imdbId}
      />
    ))}
  </div>

);
