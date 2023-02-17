import React from 'react';
import { Props } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    <ul className="movies">
      {movies.map((movie) => (
        <li>
          <MovieCard {...movie} key={movie.imdbId} />
        </li>
      ))}
    </ul>
  </>
);
