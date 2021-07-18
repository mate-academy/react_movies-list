import React from 'react';
import { MoviesList } from './components/MoviesList/MoviesList';

import './App.scss';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <MoviesList movies={moviesFromServer} />

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
