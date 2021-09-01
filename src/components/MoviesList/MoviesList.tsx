import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/MovieTypes';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
