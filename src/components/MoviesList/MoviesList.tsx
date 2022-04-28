import React from 'react';
import { Movie } from '../types/Movie';

import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      </li>
    ))}
  </ul>
);
