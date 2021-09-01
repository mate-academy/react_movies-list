import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../Types/Movie';
import { MovieCard } from '../MovieCard';

interface Movies {
  movies: Movie[],
}

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
