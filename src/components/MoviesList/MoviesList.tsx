import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  moviesFromServer: Movie[],
};

export const MoviesList: React.FC<Props> = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard
        movie={movie}
        key={movie.imdbId}
      />
    ))}
  </div>
);
