import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type MoviesProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesProps> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
