import React from 'react';
import { MoviesList } from './components/MoviesList';
import movies from './api/movies.json';

import './App.scss';
// import moviesFromServer from './api/movies.json';

/* eslint-disable max-len */
export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList moviesList={movies} />
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
