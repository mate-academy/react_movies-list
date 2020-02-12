import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies';
import { MoviesList } from './components/MoviesList/index';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList MoviesArrApi={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
