import React from 'react';
import './MoviesList.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = () => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard
        key={movie.imdbId}
        {...movie}
      />
    ))}
  </div>
);
