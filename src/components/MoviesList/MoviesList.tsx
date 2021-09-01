import React from 'react';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard/MovieCard';

import './MoviesList.scss';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movieItem => (
      <MovieCard movie={movieItem} key={movieItem.imdbId} />
    ))}
  </div>
);
