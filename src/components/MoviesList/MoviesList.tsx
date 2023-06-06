/* eslint-disable max-len */
import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map(movie => {
        return (
          <li className="card" data-cy="Movie" key={movie.imdbId}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};
