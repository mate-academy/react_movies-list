/* eslint-disable max-len */
// import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App = () => {
  const movies = moviesFromServer;

  return (
    (
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies} />
        </div>

        <div className="sidebar" data-cy="Sidebar">
          Sidebar will be here
        </div>
      </div>
    )
  );
};
