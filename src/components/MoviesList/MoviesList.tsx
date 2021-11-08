import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';

interface Props {
  moviesFromServer: Movie[];
}

export const MoviesList: React.FC<Props> = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map((movie) => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    ))}
  </div>
);
