import React from 'react';

import { Movie } from '../../types/Movie';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">

    {movies.map(movie => (
      <li key={movie.imdbId}>

        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
