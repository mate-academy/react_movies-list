// MoviesList.tsx
import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <div className="card" key={movie.imdbId}>
        <MovieCard key={movie.imdbId} movie={movie} />
      </div>
    ))}
  </div>
);
