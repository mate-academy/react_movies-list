/* eslint-disable max-len */
import React from 'react';
// SCSS
import './App.scss';
// JSON
import moviesFromServer from './api/movies.json';
// components
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
