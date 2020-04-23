import React from 'react';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList/MoviesList';
import './App.scss';

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
