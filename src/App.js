import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList films={moviesFromServer} />
    </div>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
