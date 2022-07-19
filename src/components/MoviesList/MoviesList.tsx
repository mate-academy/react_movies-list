import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul>
    {
      movies.map((singleMovie) => (
        <li key={singleMovie.imdbId}>
          <MovieCard
            movie={singleMovie}
            data-cy="card"
          />
        </li>
      ))
    }
  </ul>
);
