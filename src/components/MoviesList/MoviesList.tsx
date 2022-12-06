import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movieItem => (
      <MovieCard
        movie={movieItem}
        key={movieItem.imdbUrl}
      />
    ))}
  </ul>
);
