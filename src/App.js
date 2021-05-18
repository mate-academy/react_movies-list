import React from 'react';

import Movies from './components/MoviesList/MoviesList';
import './App.scss';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <Movies movies={moviesFromServer} />
    </div>

    <div className="sidebar">Sidebar will be here</div>
  </div>
);
