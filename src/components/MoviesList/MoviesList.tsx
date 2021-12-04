import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { MovieInfo } from '../../types/MovieInfo';

type Props = {
  moviesCollection: MovieInfo[],
};

export const MoviesList: React.FC<Props> = ({ moviesCollection }) => (
  <div className="movies">
    {moviesCollection.map(movie => (
      <div className="card">
        <MovieCard {...movie} key={movie.imdbId} />
      </div>
    ))}
  </div>
);
