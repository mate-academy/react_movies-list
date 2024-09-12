/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieCard } from './components/MovieCard';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {moviesFromServer.map(movie => {
          return (
            <MovieCard
              key={movie.imdbId}
              title={movie.title}
              description={movie.description}
              imgUrl={movie.imgUrl}
              imdbUrl={movie.imdbUrl}
            />
          );
        })}
      </div>
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
