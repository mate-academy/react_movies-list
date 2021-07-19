import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import moviesFromServer from '../../api/movies.json';

export const MoviesList = () => (
  <>
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard {...movie} key={movie.imdbId} />
      ))}
    </div>
  </>
);
