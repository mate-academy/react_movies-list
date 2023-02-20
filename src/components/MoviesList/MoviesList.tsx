import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export type Props = {
  movies?: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <ul className="movies">
      {movies.map((movie) => (
        <li>
          <MovieCard movie={movie} key={movie.imdbId} />
        </li>
      ))}
    </ul>
  </>
);
