/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import OurMovies from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={OurMovies} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
