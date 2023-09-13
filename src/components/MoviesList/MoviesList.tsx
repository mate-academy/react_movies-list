import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MovieListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieListProps> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard card={movie} />
      </li>
    ))}
  </ul>
);
