import React from 'react';
import { MoviesList } from './components/MoviesList/MoviesList';
import './App.scss';
import movies from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={movies} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
