import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../MovieCard/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
