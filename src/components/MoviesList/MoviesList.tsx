import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { MovieInfo } from '../../types/MovieInfo';

type Props = {
  movies: MovieInfo[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);
