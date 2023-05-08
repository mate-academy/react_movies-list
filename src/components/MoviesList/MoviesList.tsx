import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div
        className="card"
        data-cy="Movie"
      >
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      </div>
    ))}
  </div>
);
