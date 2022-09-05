import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies: list }) => (
  <ul className="movies">
    {list.map((movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </ul>
);
