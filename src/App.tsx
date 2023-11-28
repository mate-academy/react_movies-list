/* eslint-disable max-len */
import React from 'react';

import { MoviesList } from './components/MoviesList';
import movies from './api/movies.json';

import './App.scss';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  <MoviesList movies={movies} />
  </div>
);
