import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieCard } from './components/MovieCard/MovieCard';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieCard movies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
