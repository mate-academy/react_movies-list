import React from 'react';
import { Movie } from '../../type/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </>
);
