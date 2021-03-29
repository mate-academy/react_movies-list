import React from 'react';
import './MoviesList.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MoviesList = () => (
  <>
    <div className="movies">
      {moviesFromServer.map(item => (
        <div className="card" key={item.imdbId}>
          <MovieCard {...item} />
        </div>
      ))}
    </div>
  </>
);
