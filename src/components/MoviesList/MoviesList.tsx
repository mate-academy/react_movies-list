import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/types';

type Props = {
  moviesFromServer: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesFromServer }) => {
  return (
    <div className="movies">
      {moviesFromServer.map((movie) => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
