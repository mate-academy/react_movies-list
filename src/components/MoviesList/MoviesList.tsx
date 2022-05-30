import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../react-app-env';
import { MovieCard } from '../MovieCard';

type Props = {
  moviesFromServer: Movie[]
};

export const MoviesList: React.FC<Props> = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
