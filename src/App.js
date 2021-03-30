import React from 'react';

import moviesFromServer from './api/movies.json';
import { Sidebar } from './components/Sidebar';
import { MoviesList } from './components/MoviesList/MoviesList';

import './App.scss';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>
    <Sidebar />
  </div>
);
