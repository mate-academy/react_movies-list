import React from 'react';
import { MoviesList } from './components/MoviesList';

import './App.scss';

import filmsList from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={filmsList} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
