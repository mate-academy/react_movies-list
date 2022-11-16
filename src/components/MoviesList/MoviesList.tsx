import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

interface MoviesListProps {
  movies : Movie[]
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie : Movie) => (
      <div key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
