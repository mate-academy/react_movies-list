import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type MoviesListProps = {
  movies: Movie[]
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <li key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
