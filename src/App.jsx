import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
// eslint-disable-next-line import/extensions
import moviesFromServer from './api/movies';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
