import React from 'react';

import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Movies = {
  // eslint-disable-next-line react/require-default-props
  movies?: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <ul className="movies">
    {movies && movies.map(movie => (
      <li key={movie.imdbUrl}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      </li>
    ))}
  </ul>
);
