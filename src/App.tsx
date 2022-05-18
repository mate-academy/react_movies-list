import React from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList/MoviesList';

import moviesFromAPI from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        <MoviesList movies={moviesFromAPI} />
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
