import React from 'react';
import { MoviesList } from './components/MoviesList/MoviesList';
import './App.scss';
import moviesFromServer from './api/movies';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList moviesList={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
