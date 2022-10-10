/* eslint-disable max-len */
import React from 'react';
// import { type } from 'os';
import './App.scss';
import movies from './api/movies.json';
import { MoviesList } from './components/MoviesList/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={movies} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
