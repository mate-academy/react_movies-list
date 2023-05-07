import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[]
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
