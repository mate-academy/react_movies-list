import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import moviesFromServer from '../../api/movies.json';

export const MoviesList = () => (
  <>
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard {...movie} />
      ))}
    </div>
  </>
);
