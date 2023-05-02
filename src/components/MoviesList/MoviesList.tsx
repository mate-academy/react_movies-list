import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

interface MoviesProps {
  movies: Movie[],
}

export const MoviesList: React.FC<MoviesProps> = ({ movies }) => (

  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        movie={movie}
        key={movie.imdbId}
      />
    ))}
  </div>

);