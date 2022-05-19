import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  </>
);
