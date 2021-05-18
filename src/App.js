import React from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

import './App.scss';
// import moviesFromServer from './api/movies';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />

      <div className="sidebar">
        Sidebar will be here
      </div>
    </div>
  </div>
);
